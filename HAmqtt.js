
var mqtt;
var reconnectTimeout = 4000;
var mqtt_message_enabled = [false,false,false,false,false,false,false,false,false,false];
var mqtt_message_type = ["","","","","","","","","",""];
var mqtt_message_text = ["","","","","","","","","",""];
var mqtt_message_id = ["","","","","","","","","",""];
var mqtt_current_idx = -1;
var mqtt_error_count = 20;

function onFailure(message) {
	console.log("Connection Attempt to Host "+g_MQTT_IP+" Failed");
	mqtt_error_count--;
	
	if ( mqtt_error_count == 0)
		addmessage("alert","Disconnected from Server","000000");
	else
		setTimeout(MQTTconnect, reconnectTimeout);
}
function onMessageArrived(msg){
//	out_msg="Message received "+msg.payloadString+"<br>";
//	out_msg=out_msg+"Message received Topic "+msg.destinationName;
//	console.log(out_msg);
//	console.log(g_MQTT_TOPIC_ALERT);
	console.log("onMessageArrived");
	const payload = JSON.parse(msg.payloadString);
	
	var date = new Date();
    var strdate = date.getHours();
    strdate += ':'+(date.getMinutes()<10?'0':'')+date.getMinutes();
	strdate += ':'+(date.getSeconds()<10?'0':'')+date.getSeconds();
	
	if ( msg.destinationName == g_MQTT_TOPIC_ALERT )
		addmessage(payload.type,payload.message,strdate);
	
}

function onConnectionLost(){
	console.log("connection lost");
	mqtt_error_count--;
	if ( mqtt_error_count == 0)
		addmessage("alert","Disconnected from Server","000000");
	else	
		setTimeout(MQTTconnect, reconnectTimeout);
}
	
function onConnect() {
	// Once a connection has been made, make a subscription and send a message.
	console.log("Connected ");
	mqtt.subscribe(g_MQTT_TOPIC_COMMAND);
	mqtt.subscribe(g_MQTT_TOPIC_ALERT);
	message = new Paho.MQTT.Message('{Status: "Start",Page: "Netflix"}');
	message.destinationName = g_MQTT_TOPIC_INFO;
	mqtt.send(message);
}

function MQTTconnect() {
	console.log("connecting to "+ g_MQTT_IP +" "+ g_MQTT_PORT);
	mqtt = new Paho.MQTT.Client(g_MQTT_IP,g_MQTT_PORT,g_HA_MYID);
	var options = {
		timeout: 3,
		onSuccess: onConnect,
		onFailure: onFailure,
	 };
	mqtt.onMessageArrived = onMessageArrived;
	mqtt.onConnectionLost = onConnectionLost;
	mqtt.connect(options); //connect
}

function addmessage(type,message,id) {

	for ( var idx=0 ; idx < 10 ; idx ++ )
	{
		if (mqtt_message_enabled[idx] == false)
		{
			console.log(idx);
			mqtt_message_id[idx]=id;
			mqtt_message_text[idx]=message;
			mqtt_message_type[idx]=type;
			mqtt_current_idx = idx -1;
			mqtt_message_enabled[idx]=true;
			displaymqttmessage(type,message);
			break;
		}
	}
			

}

function displaymqttmessage(type,message) {
		var iconname = "";
				
		var HA_icoalert = document.body.querySelector('#HA_icoalert');
		var HA_icoalarm = document.body.querySelector('#HA_icoalarm');
		var HA_iconmessage = document.body.querySelector('#HA_iconmessage');
		
		HA_icoalert.style.display = 'none';
		HA_icoalarm.style.display = 'none';
		HA_iconmessage.style.display = 'none';
		
		if (type == "info")	{
			HA_iconmessage.style.display = 'inline';
		} else if ( type == "alert") {
			HA_icoalarm.style.display = 'inline';
		} else if ( type == "alarm") {
			HA_icoalarm.style.display = 'inline';
		} 
		
		var messagebox = document.body.querySelector('#HA_message');
		messagebox.innerHTML = message;
}

function cycleMessage() {

	for (var idx=0; idx < 10 ; idx++ )
	{
		mqtt_current_idx++;
		if ( mqtt_current_idx > 9 )
			mqtt_current_idx =0;

		if ( mqtt_message_enabled[mqtt_current_idx] )
		{
			displaymqttmessage( mqtt_message_type[mqtt_current_idx] , mqtt_message_text[mqtt_current_idx] )
			break;
		}
	}

	setTimeout(cycleMessage, g_UI_MESSAGE_TIME*1000 ); 
}

// wait before start mqtt 
setTimeout(MQTTconnect, 2000 );
setTimeout(cycleMessage, 3000 );



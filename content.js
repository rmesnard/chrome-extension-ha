
//console.log("content run");
		
chrome.runtime.sendMessage({method: "getOptions"}, function(response) {

	var urlextension = chrome.extension.getURL("");
	console.log(urlextension);

	var script1 = document.createElement('script');
	script1.src = chrome.extension.getURL('lib/mqttws31.js');
	script1.onload = function() { this.remove(); };
	(document.head || document.documentElement).appendChild(script1);	

	var script2 = document.createElement('script');
	
	var actualCode = 'g_urlextension = "'+urlextension+'";';
	actualCode += 'g_enablekodi = "'+response.KODI_SHORT+'";';
	actualCode += 'g_HA_IP = "'+response.HA_IP+'";';
	actualCode += 'g_HA_MYID = "'+response.HA_MYID+'";';
	actualCode += 'g_MQTT_IP = "'+response.MQTT_IP+'";';
	actualCode += 'g_MQTT_PORT = parseInt("'+response.MQTT_PORT+'");';
	actualCode += 'g_MQTT_TOPIC_INFO = "'+response.MQTT_TOPIC_INFO+'";';
	actualCode += 'g_MQTT_TOPIC_ALERT = "'+response.MQTT_TOPIC_ALERT+'";';
	actualCode += 'g_MQTT_TOPIC_COMMAND = "'+response.MQTT_TOPIC_COMMAND+'";';
	actualCode += 'g_UI_MESSAGE_TIME = parseInt("'+response.UI_MESSAGE_TIME+'");';
	
	script2.textContent = actualCode;
	(document.head||document.documentElement).appendChild(script2);
	script2.remove();

	var script3 = document.createElement('script');
	script3.src = chrome.extension.getURL('HAmqtt.js');
	script3.onload = function() { this.remove(); };
	(document.head || document.documentElement).appendChild(script3);	
	
	var script4 = document.createElement('script');
	script4.src = chrome.extension.getURL('netflix.js');
	script4.onload = function() { this.remove(); };
	(document.head || document.documentElement).appendChild(script4);	

});


console.log("content run");
	
	
chrome.runtime.sendMessage({method: "getOptions"}, function(response) {

	var script = document.createElement('script');
	
	var urlextension = chrome.extension.getURL("");
	console.log(urlextension);
	
	var actualCode = 'g_urlextension = "'+urlextension+'";';
	actualCode += 'g_enablekodi = "'+response.KODI_SHORT+'";';
	actualCode += 'g_HA_IP = "'+response.HA_IP+'";';
	actualCode += 'g_HA_MYID = "'+response.HA_MYID+'";';
	actualCode += 'g_MQTT_IP = "'+response.MQTT_IP+'";';
	actualCode += 'g_MQTT_PORT = "'+response.MQTT_PORT+'";';
	actualCode += 'g_MQTT_TOPIC_INFO = "'+response.MQTT_TOPIC_INFO+'";';
	actualCode += 'g_MQTT_TOPIC_ALERT = "'+response.MQTT_TOPIC_ALERT+'";';

	script.textContent = actualCode;
	(document.head||document.documentElement).appendChild(script);
	script.remove();
	
	script = document.createElement('script');
	script.src = chrome.extension.getURL('netflix.js');
	script.onload = function() { this.remove(); };
	(document.head || document.documentElement).appendChild(script);	

});

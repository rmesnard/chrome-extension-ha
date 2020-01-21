chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getOptions")
	{
		
      sendResponse({KODI_SHORT: localStorage['KODI_SHORT'],
					HA_IP: localStorage['HA_IP'],
					HA_MYID: localStorage['HA_MYID'],
					MQTT_IP: localStorage['MQTT_IP'],
					MQTT_PORT: localStorage['MQTT_PORT'],
					MQTT_TOPIC_INFO: localStorage['MQTT_TOPIC_INFO'],
					MQTT_TOPIC_ALERT: localStorage['MQTT_TOPIC_ALERT']
					});
	}
    else
      sendResponse({}); // snub them.
});

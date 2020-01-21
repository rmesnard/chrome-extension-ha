
	  
 	
function update_page() {

  chrome.storage.local.get({
    HA_IP: '127.0.0.1',
    HA_MYID: 'myBrowser',
    MQTT_IP: '127.0.0.1',
    MQTT_PORT: '9001',
    MQTT_TOPIC_INFO: 'browserchrome/myBrowser/info',
    MQTT_TOPIC_ALERT: 'browserchrome/myBrowser/alert',
    KODI_SHORT: false
  }, function(items) {

	var browsebar = document.body.querySelector('div.main-header');
	var urlicoha = chrome.extension.getURL("img/windows8-256.png");
	var urlicotv = chrome.extension.getURL("img/tv-256.png");
	var urlkodi = chrome.extension.getURL("kodi.html");

	var newinnerHTML = '<a href="'+items.HA_IP+'"><img src="'+urlicoha+'" style="margin-right:40px;width: 40px;height: 40px;"/></a>';

	if ( items.KODI_SHORT )
		newinnerHTML += '<a href="'+urlkodi+'"><img src="'+urlicotv+'" style="margin-right:40px;width: 50px;height: 50px;"/></a>';

	browsebar.innerHTML = newinnerHTML + browsebar.innerHTML;
  
    //browsebar.innerHTML = "test DEBUG";

  });

}

document.addEventListener('DOMContentLoaded', update_page);

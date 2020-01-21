// Saves options to chrome.storage
function save_options() {
  var KODI_SHORT = document.getElementById('KODI_SHORT').checked;
  var HA_IP = document.getElementById('HA_IP').value;
  var HA_MYID = document.getElementById('HA_MYID').value;
  var MQTT_IP = document.getElementById('MQTT_IP').value;
  var MQTT_PORT = document.getElementById('MQTT_PORT').value;
  var MQTT_TOPIC_INFO = document.getElementById('MQTT_TOPIC_INFO').value;
  var MQTT_TOPIC_ALERT = document.getElementById('MQTT_TOPIC_ALERT').value;

  chrome.storage.local.set({
    HA_IP: HA_IP,
    HA_MYID: HA_MYID,
	MQTT_IP: MQTT_IP,
	MQTT_PORT: MQTT_PORT,
	MQTT_TOPIC_INFO: MQTT_TOPIC_INFO,
	MQTT_TOPIC_ALERT: MQTT_TOPIC_ALERT,
	KODI_SHORT: KODI_SHORT
	
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
  
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {

  chrome.storage.local.get({
    HA_IP: '127.0.0.1',
    HA_MYID: 'myBrowser',
    MQTT_IP: '127.0.0.1',
    MQTT_PORT: '9001',
    MQTT_TOPIC_INFO: 'browserchrome/myBrowser/info',
    MQTT_TOPIC_ALERT: 'browserchrome/myBrowser/alert',
    KODI_SHORT: false
  }, function(items) {
    document.getElementById('HA_IP').value = items.HA_IP;
    document.getElementById('HA_MYID').value = items.HA_MYID;
    document.getElementById('MQTT_IP').value = items.MQTT_IP;
    document.getElementById('MQTT_PORT').value = items.MQTT_PORT;
    document.getElementById('MQTT_TOPIC_INFO').value = items.MQTT_TOPIC_INFO;
    document.getElementById('MQTT_TOPIC_ALERT').value = items.MQTT_TOPIC_ALERT;
    document.getElementById('KODI_SHORT').checked = items.KODI_SHORT;
  });

}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

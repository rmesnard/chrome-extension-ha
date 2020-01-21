// Saves options to chrome.storage
function save_options() {
  var KODI_SHORT = document.getElementById('KODI_SHORT').checked;
  var HA_IP = document.getElementById('HA_IP').value;
  var HA_MYID = document.getElementById('HA_MYID').value;
  var MQTT_IP = document.getElementById('MQTT_IP').value;
  var MQTT_PORT = document.getElementById('MQTT_PORT').value;
  var MQTT_TOPIC_INFO = document.getElementById('MQTT_TOPIC_INFO').value;
  var MQTT_TOPIC_ALERT = document.getElementById('MQTT_TOPIC_ALERT').value;

  localStorage['KODI_SHORT'] =  KODI_SHORT;
  localStorage['HA_IP'] =  HA_IP;
  localStorage['HA_MYID'] =  HA_MYID;
  localStorage['MQTT_IP'] =  MQTT_IP;
  localStorage['MQTT_PORT'] =  MQTT_PORT;
  localStorage['MQTT_TOPIC_INFO'] =  MQTT_TOPIC_INFO;
  localStorage['MQTT_TOPIC_ALERT'] =  MQTT_TOPIC_ALERT;

}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {


    document.getElementById('HA_IP').value = localStorage['HA_IP'];
    document.getElementById('HA_MYID').value = localStorage['HA_MYID'];
    document.getElementById('MQTT_IP').value = localStorage['MQTT_IP'];
    document.getElementById('MQTT_PORT').value = localStorage['MQTT_PORT'];
    document.getElementById('MQTT_TOPIC_INFO').value = localStorage['MQTT_TOPIC_INFO'];
    document.getElementById('MQTT_TOPIC_ALERT').value = localStorage['MQTT_TOPIC_ALERT'];
    document.getElementById('KODI_SHORT').checked = localStorage['KODI_SHORT'];

}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

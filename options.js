// Saves options to localstorage
function save_options() {
  var KODI_SHORT = document.getElementById('KODI_SHORT').checked;
  var HA_IP = document.getElementById('HA_IP').value;
  var HA_MYID = document.getElementById('HA_MYID').value;
  var MQTT_IP = document.getElementById('MQTT_IP').value;
  var MQTT_PORT = document.getElementById('MQTT_PORT').value;
  var MQTT_TOPIC_INFO = document.getElementById('MQTT_TOPIC_INFO').value;
  var MQTT_TOPIC_ALERT = document.getElementById('MQTT_TOPIC_ALERT').value;

	if ( KODI_SHORT )
		localStorage['KODI_SHORT'] =  "true";
	else
		localStorage['KODI_SHORT'] =  "false";
  localStorage['HA_IP'] =  HA_IP;
  localStorage['HA_MYID'] =  HA_MYID;
  localStorage['MQTT_IP'] =  MQTT_IP;
  localStorage['MQTT_PORT'] =  MQTT_PORT;
  localStorage['MQTT_TOPIC_INFO'] =  MQTT_TOPIC_INFO;
  localStorage['MQTT_TOPIC_ALERT'] =  MQTT_TOPIC_ALERT;

 /* Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
*/
}

function restore_options() {


    document.getElementById('HA_IP').value = localStorage['HA_IP'];
    document.getElementById('HA_MYID').value = localStorage['HA_MYID'];
    document.getElementById('MQTT_IP').value = localStorage['MQTT_IP'];
    document.getElementById('MQTT_PORT').value = localStorage['MQTT_PORT'];
    document.getElementById('MQTT_TOPIC_INFO').value = localStorage['MQTT_TOPIC_INFO'];
    document.getElementById('MQTT_TOPIC_ALERT').value = localStorage['MQTT_TOPIC_ALERT'];
    
	if ( localStorage['KODI_SHORT'] == "true" )
		document.getElementById('KODI_SHORT').checked = true;
	else
		document.getElementById('KODI_SHORT').checked = false;

}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

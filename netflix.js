console.log("netflix js run");

function addHeader() {
	var browsehead = document.body.querySelector('div.pinning-header-container');

	if ( browsehead != undefined ) {

		var urlicotv = g_urlextension + "img/tv-256.png";
		var urlkodi = g_urlextension + "kodi.html";
		var urlicoha = g_urlextension + "img/windows8-256.png";
		var urlicomsg = g_urlextension + "img/comments-yellow.png";
		var urlicoalert = g_urlextension + "img/error-red.png";
		var urlicoring = g_urlextension + "img/appointment_reminders-blue.png";


		var newinnerHTML = '<div style="top: 0px;height: 68px;position: relative;background: #141414;"><a href="'+g_HA_IP+'"><img src="'+urlicoha+'" style="margin: 10px 0px 10px 40px;width: 40px;height: 40px;"/></a>';
		if ( g_enablekodi == "true" )
			newinnerHTML += '<a href="'+urlkodi+'"><img src="'+urlicotv+'" style="margin: 10px 0px 10px 40px;width: 50px;height: 50px;"/></a>';
		newinnerHTML += '</div><div id="HA_horloge" style="top: 0px;right: 40px;position: absolute;font-size: 2.5vw;font-weight: bold;font-family: \'Netflix Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif">00:00</div> ';
		newinnerHTML += '<div  id="HA_iconmessage" style="top: 0px;left: 200px;position: absolute;display: none;z-index: 10;"><img src="'+urlicomsg+'" style="margin: 10px 10px 10px 100px;width: 50px;height: 50px;"/></div> ';
		newinnerHTML += '<div id="HA_icoalert"  style="top: 0px;left: 200px;position: absolute;display: none;z-index: 10;"><img src="'+urlicoalert+'" style="margin: 10px 10px 10px 100px;width: 50px;height: 50px;"/></div> ';
		newinnerHTML += '<div id="HA_icoalarm"  style="top: 0px;left: 200px;position: absolute;display: none;z-index: 10;"><img src="'+urlicoring+'" style="margin: 10px 10px 10px 100px;width: 50px;height: 50px;"/></div> ';
		newinnerHTML += '<div id="HA_message" style="top: 20px;left: 400px;position: absolute;font-size: 1.6vw;font-family: \'Netflix Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif;z-index: 10;"></div> ';

		browsehead.innerHTML = newinnerHTML + browsehead.innerHTML ;	
		
		horloge('HA_horloge');
	} 
}

function addOverlay() {
	var overlayHTML = document.body.querySelector('div.pinning-header-container');

	if ( overlayHTML != undefined ) {

		var urlicomsg = g_urlextension + "img/comments-yellow.png";
		var urlicoalert = g_urlextension + "img/error-red.png";
		var urlicoring = g_urlextension + "img/appointment_reminders-blue.png";

		var newinnerHTML = '<div  id="HA_iconmessage" style="top: 0px;left: 200px;position: absolute;display: none;z-index: 10;"><img src="'+urlicomsg+'" style="margin: 10px 10px 10px 100px;width: 50px;height: 50px;"/></div> ';
		newinnerHTML += '<div id="HA_icoalert"  style="top: 0px;left: 200px;position: absolute;display: none;z-index: 10;"><img src="'+urlicoalert+'" style="margin: 10px 10px 10px 100px;width: 50px;height: 50px;"/></div> ';
		newinnerHTML += '<div id="HA_icoalarm"  style="top: 0px;left: 200px;position: absolute;display: none;z-index: 10;"><img src="'+urlicoring+'" style="margin: 10px 10px 10px 100px;width: 50px;height: 50px;"/></div> ';
		newinnerHTML += '<div id="HA_message" style="top: 20px;left: 400px;position: absolute;font-size: 1.6vw;font-family: \'Netflix Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif;z-index: 10;"></div> ';

		//overlayHTML.innerHTML = newmessageHTML + overlayHTML.innerHTML ;	
		overlayHTML.innerHTML = newinnerHTML + overlayHTML.innerHTML;
	} 
 

	var overlayVideo = document.body.querySelector('div.controls-full-hit-zone'); 
 
	if ( overlayVideo != undefined ) {

		var urlicomsg = g_urlextension + "img/comments-yellow.png";
		var urlicoalert = g_urlextension + "img/error-red.png";
		var urlicoring = g_urlextension + "img/appointment_reminders-blue.png";

		var newinnerHTML = '<div  id="HA_iconmessage" style="top: 0px;left: 200px;position: absolute;display: none;z-index: 10;"><img src="'+urlicomsg+'" style="margin: 10px 10px 10px 100px;width: 50px;height: 50px;"/></div> ';
		newinnerHTML += '<div id="HA_icoalert"  style="top: 0px;left: 200px;position: absolute;z-index: 10;"><img src="'+urlicoalert+'" style="margin: 10px 10px 10px 100px;width: 50px;height: 50px;"/></div> ';
		newinnerHTML += '<div id="HA_icoalarm"  style="top: 0px;left: 200px;position: absolute;display: none;z-index: 10;"><img src="'+urlicoring+'" style="margin: 10px 10px 10px 100px;width: 50px;height: 50px;"/></div> ';
		newinnerHTML += '<div id="HA_message" style="top: 20px;left: 400px;position: absolute;font-size: 1.6vw;font-family: \'Netflix Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif;z-index: 10;"></div> ';

		//overlayHTML.innerHTML = newmessageHTML + overlayHTML.innerHTML ;	
		overlayVideo.innerHTML = newinnerHTML + overlayVideo.innerHTML;
	} 
 
}

document.addEventListener("click", function( event ) {
	
  
  var itemclicked = event.target.attributes.getNamedItem('data-uia');
   if ( itemclicked != undefined )
   {
	if ( itemclicked.value == "nfplayer-exit" )
	{
		console.log("player exit");
		// reload header
		setTimeout(addHeader, 1000); // wait  1 sec to load
 	}
   }
   else
	setTimeout(addOverlay, 2000); // wait  1 sec to load
  
  
});

function horloge(el) {
  if(typeof el=="string") { el = document.getElementById(el); }

  function actualiser() {
    var date = new Date();
    var str = date.getHours();
    str += ':'+(date.getMinutes()<10?'0':'')+date.getMinutes();
    el.innerHTML = str;
  }
	if ( el != undefined ) {  
	  actualiser();
	  setInterval(actualiser,30000);
	}
};

setTimeout(addHeader, 2000); // wait  1 sec to load
//setTimeout(addOverlay, 2500); // wait  1 sec to load
		


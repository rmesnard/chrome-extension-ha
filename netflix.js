
console.log("netflix run");


function patchHeader() {
	var browsehead = document.body.querySelector('div.pinning-header-container');

	if ( browsehead != undefined ) {

		var urlicotv = g_urlextension + "img/tv-256.png";
		var urlkodi = g_urlextension + "kodi.html";
		var urlicomsg = g_urlextension + "img/comments-yellow.png";
		var urlicoalert = g_urlextension + "img/error-red.png";
		var urlicoring = g_urlextension + "img/appointment_reminders-blue.png";
		var urlicoha = g_urlextension + "img/windows8-256.png";

		var newinnerHTML = '<div style="top: 0px;height: 68px;position: relative;background: #141414;"><a href="'+g_HA_IP+'"><img src="'+urlicoha+'" style="margin: 10px 0px 10px 40px;width: 40px;height: 40px;"/></a>';
		if ( g_enablekodi == "true" )
			newinnerHTML += '<a href="'+urlkodi+'"><img src="'+urlicotv+'" style="margin: 10px 0px 10px 40px;width: 50px;height: 50px;"/></a>';

		var newmessageHTML = '<div  id="HA_iconmessage" style="top: 0px;left: 200px;position: absolute;display: none;"><img src="'+urlicomsg+'" style="margin: 10px 10px 10px 100px;width: 50px;height: 50px;"/></div> ';
		newmessageHTML += '<div  id="HA_iconmessage" style="top: 0px;left: 200px;position: absolute;"><img src="'+urlicoalert+'" style="margin: 10px 10px 10px 100px;width: 50px;height: 50px;"/></div> ';
		newmessageHTML += '<div id="HA_message" style="top: 20px;left: 400px;position: absolute;font-size: 1.6vw;font-family: \'Netflix Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif">Message de test</div> ';
		newmessageHTML += '<div id="HA_horloge" style="top: 20px;right: 40px;position: absolute;font-size: 2vw;font-family: \'Netflix Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif">00:00</div> ';


		browsehead.innerHTML = newinnerHTML + '</div>' + newmessageHTML + browsehead.innerHTML ;	
		
	} else {
		setTimeout(patchHeader, 1000); // try again in 1000 milliseconds
	}
 
}

document.addEventListener("click", function( event ) {
  
  var itemclicked = event.target.attributes.getNamedItem('data-uia');
   if ( itemclicked != undefined )
   {
	if ( itemclicked.value == "nfplayer-exit" )
	{
		console.log("player exit");
		patchHeader();
 	}
   }
});


patchHeader();

function horloge(el) {
  if(typeof el=="string") { el = document.getElementById(el); }
  function actualiser() {
    var date = new Date();
    var str = date.getHours();
    str += ':'+(date.getMinutes()<10?'0':'')+date.getMinutes();
    el.innerHTML = str;
  }
  actualiser();
  setInterval(actualiser,30000);
};

horloge('HA_horloge');



console.log("netflix run");


function patchHeader() {
	var browsehead = document.body.querySelector('div.pinning-header-container');

	if ( browsehead != undefined ) {

		var urlicotv = g_urlextension + "img/tv-256.png";
		var urlkodi = g_urlextension + "kodi.html";
		var urlicomsg = g_urlextension + "img/comments-48.png";
		var urlicoha = g_urlextension + "img/windows8-256.png";

		var newinnerHTML = '<div style="top: 0px;height: 60px;position: relative;background: #141414;"><div style="float: left;" ><a href="'+g_HA_IP+'"><img src="'+urlicoha+'" style="margin: 10px 0px 10px 40px;width: 40px;height: 40px;"/></a></div>';
		if ( g_enablekodi == "true" )
			newinnerHTML += '<div style="float: left;" ><a href="'+urlkodi+'"><img src="'+urlicotv+'" style="margin: 10px 0px 10px 40px;width: 50px;height: 50px;"/></a></div>';

		newinnerHTML += '<div style="float: left;"  ><img src="'+urlicomsg+'" style="margin: 10px 0px 10px 10px;width: 50px;height: 50px;"/> Message de Test :  ceci est une info  !  </div>';
		browsehead.innerHTML = newinnerHTML + '</div>' + browsehead.innerHTML ;	
		
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

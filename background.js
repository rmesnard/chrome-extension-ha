chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getOptions")
      sendResponse({status: localStorage['HA_IP']});
    else
      sendResponse({}); // snub them.
});

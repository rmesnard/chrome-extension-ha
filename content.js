
chrome.runtime.sendMessage({method: "getOptions"}, function(response) {
  console.log(response.status);
});


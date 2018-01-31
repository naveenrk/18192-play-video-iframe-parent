videojs.registerPlugin('listenForParent', function() {
  var myPlayer = this;
  // This method called when postMessage sends data into the iframe
  function controlVideo(evt){
    if(evt.data === "playVideo") {
      alert("played")
      myPlayer.play();
    } else if (evt.data === 'pauseVideo') {
      alert("paused")
      myPlayer.pause();
    }
  };
  // Listen for the message, then call controlVideo() method when received
  window.addEventListener("message",controlVideo);
});

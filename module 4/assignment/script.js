function updateClock() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var clockDiv = document.getElementById("clock");
  clockDiv.textContent = hours + ":" + minutes + ":" + seconds;
}
updateClock();
setInterval(updateClock, 1000);

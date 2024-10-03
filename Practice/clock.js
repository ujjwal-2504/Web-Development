const clock = document.querySelector('#clock');

setInterval(function() {
  let date = new Date();
  clock.innerText = date.toLocaleTimeString();
}, 1000);
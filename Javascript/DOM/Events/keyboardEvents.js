let btn = document.querySelector('button');

// btn.addEventListener('click', function(event) {
//   console.log(event);
//   console.log("clicked");
// });

// btn.addEventListener('dblclick', function(event) {
//   console.log(event);
//   console.log("double clicked");
// });

let inp = document.querySelector('input');

inp.addEventListener('keydown', function(event) {
  console.log(event.key);
  console.log(event.code);
  console.log("key pressed");
});


// inp.addEventListener('keyup', function() {
  //   console.log("key released");
  // });

  let inp2 = document.querySelector("input:nth-of-type(2)");


  inp2.addEventListener('keydown', function(event) {

    if(event.code == "ArrowUp" || event.code == "KeyW")
      console.log("Character move forward");

    if(event.code == "ArrowDown" || event.code == "KeyS")
      console.log("Character move backward");

    if(event.code == "ArrowRight" || event.code == "KeyD")
      console.log("Character move right");

    if(event.code == "ArrowLeft" || event.code == "KeyA")
      console.log("Character move left");
    
  });
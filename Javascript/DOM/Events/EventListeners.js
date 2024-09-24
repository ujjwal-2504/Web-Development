// let btn = document.querySelector('button');

// btn.onclick = function() {
//   alert("Button was clicked");
// }

// let btns = document.querySelectorAll('button');
// let btn = document.querySelector('button');

// function sayHello() {
//   alert("Hello");
// }

// function sayName() {
//   alert("Ujjwal");
// }

// for (btn of btns) {
  // btn.onclick = sayHello;
  // btn.onmouseenter = function () {
  //   console.log("You entered in a button");
  // }

  // btn.addEventListener('click', sayHello);
  // btn.addEventListener('click', sayName);
//   btn.addEventListener('dblclick', function () {
//     console.log("Double click on button");
//   });
// }

// let p = document.querySelector('p');

// p.addEventListener('click', function() {
//   console.log("Para was clicked");
// });

// let div = document.querySelector('div');
// div.addEventListener('mouseenter', function() {
//   console.log("hovered over div");
// });
// div.addEventListener('mouseleave', function() {
//   console.log("leaved");
// });


// btn.addEventListener('click', function() {
//   console.dir(this);
//   this.style.backgroundColor = "blue";
// });

let body = document.querySelector('body');

for(let child of body.children) {
  child.addEventListener('click', function() {
    this.classList.toggle('yellow');
  });
}


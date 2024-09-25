let h1 = document.querySelector('h1');

h1.addEventListener('mouseout', function() {
  console.log("Somthing happened");
});

h1.addEventListener('mouseleave', function() {
  console.log("Somthing leaved");
});

let inp = document.querySelector('input');

inp.addEventListener('keypress', function() {
  console.log("keyPressed");
});

let div = document.querySelector('div');

div.addEventListener('scroll', function() {
  let getColor = getRandomColor();
  div.style.color = getColor;
});

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let color = `rgb(${r}, ${g}, ${b})`;
  return color;
}

let btn = document.querySelector('button');

btn.addEventListener('click', function() {

  let bgcolor = getRandomColor();
  let color = getRandomColor();

  btn.style.backgroundColor = bgcolor;
  btn.style.color = color;
});

let h2 = document.querySelector('h2');
let inp2 = document.querySelector('#inp2');

inp2.addEventListener('input', function() {

  let filterValue = inp2.value.replace(/[^a-z A-Z \s]/g, '');
  inp.value = filterValue;
  h2.innerText = filterValue ? filterValue : "Enter Your Name";

});
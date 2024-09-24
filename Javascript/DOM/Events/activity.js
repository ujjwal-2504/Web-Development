let btn = document.querySelector('button');

btn.addEventListener('click', function() {
  let div = document.querySelector('div');
  let h1 = document.querySelector('h1');
  let randomColor = getRandomColor();
  h1.innerText = randomColor;
  div.style.backgroundColor = randomColor;
  console.log("Color Updated");
})

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let color = `rgb(${r}, ${g}, ${b})`;
  return color;
}
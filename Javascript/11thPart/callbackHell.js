// function one() {
//   return 1;
// }

// function two() {
//   return one() + one();
// }

// function three() {
//   let ans =  two() + one();
//   console.log(ans);
// }

// three();

// Callback Hell

let h1 = document.querySelector("h1");

// ---------------------------------------------------------

// setTimeout(() => {
//   h1.style.color = "red";
// },1000);

// setTimeout(() => {
//   h1.style.color = "orange";
// },2000);

// setTimeout(() => {
//   h1.style.color = "green";
// },3000);

// ------------------------------------------------------------

// function changeColor(color, delay) {
  
//   setTimeout(() => {
//     h1.style.color = color;
//   }, delay);
// }

// changeColor("red", 1000);
// changeColor("orange", 2000);
// changeColor("green", 3000);

// ----------------------------------------------------------------

// callback nesting -> callback hell (It is a problem).
// To get rid of callback hell we use promises, async and await

// function changeColor(color, delay, nextColorChange) {
  
//   setTimeout(() => {
//     h1.style.color = color;
//     if(nextColorChange) nextColorChange();
//   }, delay);
// }

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("yellow", 1000, () => {
//         changeColor("blue", 1000);
//       });
//     });
//   });
// });


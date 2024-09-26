// callback nesting -> callback hell (It is a problem).
// To get rid of callback hell we use promises

let h1 = document.querySelector("h1");

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


function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("Color Changed!!");
    }, delay);
  });
}

changeColor("red", 1000)
  .then(() => {
    console.log("red");
    return changeColor("orange", 1000);
  })
  .then(() => {
    console.log("orange");
    return changeColor("green", 1000)
  })
  .then(() => {
    console.log("green");
    return changeColor("yellow", 1000)
  })
  .then(() => {
    console.log("yellow");
    return changeColor("blue", 1000)
  })
  .then(() => {
    console.log("blue");
  })
  

async function greet() {
  // return "Namaste";
  throw "404 page not found";
}

async function greet2() {
  // age.cba();
  throw "Some random error";
  return "what";
}

greet()
  .then((data) => {
    console.log("Promise was resolved, data: ", data);
  })
  .catch((error) => {
    console.log("Promise rejected with error: ", error);
  })


let five = async () => {
  return 5;
}

// await

function getNum() {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      let randNum = Math.floor(Math.random() * 10) + 1;
      console.log(randNum);
      resolve();
    }, 1000);

  })
}

async function demo() {
  await getNum();
  await getNum();
  await getNum();
  await getNum();
  getNum();
}

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      let randNum = Math.floor(Math.random() * 5) + 1;
      if(randNum > 3) {
        reject("Promise rejected");
      }

      h1.style.color = color;
      console.log("color change to ", color);
      resolve("Color Changed!!");

    }, delay);
  });
}

async function nextColor() {

  try {
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("green", 1000);
    await changeColor("yellow", 1000);
    await changeColor("blue", 1000);
  }
  catch(err) {
    console.log("Error caught");
    console.log(err);
  }

  let num = 5;
  console.log(num);
  console.log("New number is: ", num);
}
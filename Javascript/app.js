// console.log("Hello JavaScript");

let pencilPrice = 10;
let eraserPrice = 5;

// let output = "The total price is: " + (eraserPrice + pencilPrice) + " Rupees"
// let output = `The total price is: ${eraserPrice + pencilPrice} Rupees`;

console.log(`The total price is: ${eraserPrice + pencilPrice} Rupees`);

let str = "a23456";

if(str[0] === 'a' && str.length > 3) 
  console.log(`${str} is a good string.`)

let num = 12;

if((num % 3 === 0) &&((num + 1 === 15) || (num - 1 === 11)))
  console.log("Safe");
else
  console.log("Unsafe");


if(NaN) {
  console.log("This value is true");
}
else {
  console.log("This value is false");
}

let day = '4';

switch(day) {
  case '1':
    console.log("Monday");
    break;
    
  case '2':
    console.log("Tuesday");
    break;

  case '3':
    console.log("Wednesday");
    break;

  case '4':
    console.log("Thursday");
    break;

  case '5':
    console.log("Friday");
    break;

  case '6':
    console.log("Saturday");
    break;

  case '7':
    console.log("Sunday");
    break;

  default:
    console.log("");
}

alert("What happend");
console.log("Simple message");
console.error("Ignore this error");
console.warn("Ignore this warning");
let name = prompt("Enter your name: ");
console.log(`What have you done ${name}`);

let num = 50;

if(!(num % 10)) console.log("good");
else console.log("bad");

// let name = prompt("Enter your name here :");
// let age = prompt("Now enter your age here: ");

// alert(`${name} is ${age} years old`);

let quater = '2';

switch(quater) {
  case '1':
    console.log("January, February, March");
    break;
    
  case '2':
    console.log("April, May, June");
    break;

  case '3':
    console.log("July, August, September");
    break;

  case '4':
    console.log("October, November, December");
    break;

  default:
    console.log("Invalid Quater");
}

let n1 = 23357, n2 = 2391397;

if(n1 % 10 == n2 % 10) 
  console.log("Yes");
else 
  console.log("no");

let msg = "   hello!  ";
console.log(msg.trim().toUpperCase());

let name = "ApnaCollege";

console.log(name.slice(4, 9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna", "Our"));
let newName = name.slice(4).replace("l", "t");
console.log(newName);
newName = newName.replace("l", "t");
console.log(newName);
console.log(name.slice(4).replace("l", "t").replace("l", "t"));
function hello() {
  console.log("Hello");
}

function Print1To5 () {
  for(let i = 1; i <= 5; i++)
    console.log(i);
}

function RollDice () {
  console.log(Math.floor(Math.random() * 6) + 1);
}

function PrintInfo(name, add = 0) {
  console.log(`${name}'s address is ${add}`);
}

function avg(a, b, c) {
  return (a+b+c)/3;
}

function printTable(a) {
  for(let i = 1; i <= 10; i++) {
    console.log(`${a} * ${i} = ${a*i}`);
  }
}

function sum1ToN(n) {
  return (n*(n+1))/2;
}

function concat(str) {

  let result = "";

  for(let i = 0; i < str.length; i++) {
    result += str[i];
  }

  return result;
}

let greet = "Hello"; // global scope

function changeGreet () {

  let greet = "Namaste";
  console.log(greet); // function scope

  function innerGreet() {
    console.log(greet); // Lexical scope
  }

  innerGreet();
}

console.log(greet);
changeGreet();

const sum = function(a, b) {

  return a+b;
}

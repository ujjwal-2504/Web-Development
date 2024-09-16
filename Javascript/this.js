// const student = {
//   name: "Ujjwal",
//   age: 20,
//   city: "Ranchi",
//   eng: 92,
//   maths: 95,
//   phy: 96,

//   getAvg () {
//     console.log(this);
//     let avg = (this.eng + this.maths + this.phy)/3;
//     console.log(`${this.name} got avg marks = ${avg}`);
//   }

// };

// let a = "";

// console.log("hello")
// console.log("hello")
// console.log("hello")
// try {
//   console.log(a);
// }
// catch(err) {
//   console.log("The a doesn't exist");  
//   console.log(err);
// }
// console.log("hello3")
// console.log("hello3")
// console.log("hello3")

const sum = (a,b) => {
  console.log(a+b);
}

// For single argument perenthesis are optional
const cube = a => {
  console.log(a*a*a);
}

const pow = (a, b) => {
  console.log(Math.pow(a, b));
}

const mul = (a,b) => (a*b);
const mul2 = (a,b) => a*b;

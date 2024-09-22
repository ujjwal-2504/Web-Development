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

let marks = 92;

const student = {
  name: "Ujjwal",
  marks: 99.9,
  city: "Ranchi",
  prop: this, // global scope

  getName: function() {
    console.log(this); // scope -> Calling object -> student
    return this.name;
  },

  getMarks: () => {
    console.log(this); // Parent's scope -> window
    return this.marks;
  },

  getInfo1: function () {

    setTimeout( () => {
      console.log(this);
    }, 2000);
  },

  getInfo2: function () {

    setTimeout( function () {
      console.log(this);
    }, 2000);
  },

};

const a = 7; //global scope

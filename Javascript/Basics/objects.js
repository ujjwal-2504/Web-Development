const student = {
  name: "Ujjwal",
  age: 20,
  marks: 99.9,
  city: "Ranchi"
};

const post = {

  username: "ujjwal123",
  content: "This is a #simplePost",
  likes: 2000, 
  repost: 25,
  tags: ["@pushkar", "@rockBhai"]

};

// console.log(post['username']);
// console.log(post.likes);

const obj = {
  1: "a",
  2: "b",
  true: "c",
  undefined: "d",
  null: "e"
};

// Object of objects
const classInfo = {

  ujjwal: {
    grade: "A+",
    city: "Ranchi"
  },

  varun: {
    grade: "A+",
    city: "Indore"
  },

  kamal: {
    grade: "A",
    city: "Delhi"
  },
  
};

// Array of objects
const classInfo2 = [

  {
    name: "Ujjwal",
    grade: "A+",
    city: "Ranchi"
  },

  {
    name: "Varun",
    grade: "A+",
    city: "Indore"
  },

  {
    name: "Kamal",
    grade: "A",
    city: "Delhi"
  },

];

let data = {

  name: "Ujjwal",
  address: "Ranchi",

};

let dataCpy = {...data, email: "ujjwal25@gmail.com"};

let arr = [1, 22, 44, 55, 66, 78, 98];

let dataCpy2 = {...arr};
let obj2 = {..."String"};
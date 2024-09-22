let arr = [1, 2, 3, 4, 5];

// forEach: take elements of array one by one and the apply the given function on each of them.

// let print = function (el) {
//   console.log(el);
// }

// arr.forEach(print);

// arr.forEach(function(el) {
//   console.log(el * 2);
// });

// arr.forEach((el) => {
//   console.log(el * 10);
// })

let students = [{
  name:"Ujjwal",
  marks: 97.4,
}, 
{
  name:"Pushkar",
  marks: 98,
}, 
{
  name:"Shradha",
  marks: 100,
},]

// arr2.forEach(student => {
//   console.log(student.marks);
// });

// map: takes the element of array one by one, apply the given function on each element and store the return output into a new array whose size is same as the given array.

let tenX = arr.map(el => {
  return el * 10;
});

// -> tenX[10, 20, 30, 40, 50];

// if function didn't return anything, new array is created with same size but undefined is present in each element of new array.

let sqr = arr.map(el => {
  el * el;
});

// -> sqr[undefined, undefined, undefined, undefined, undefined];

let gpa = students.map(student => {
  return student.marks / 10;
})

// -> gpa[9.74, 9.8, 10]

// filter: takes the element of array one by one, apply the given function on each element and if output is true then only it stores that element of the given array into a new array whose size depends as the filter given by the function. 

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter all even numbers from nums
let even = nums.filter(num => {
  return num % 2 == 0;
})
// -> even[2, 4, 6, 8, 10]

// filter all odd numbers from nums
let odd = nums.filter(num => {
  return num % 2 != 0;
})
// -> odd[1, 3, 5, 7, 9]

// every: Returns true if every element of array gives true for some function. Else returns false.
// It is very similar to logical AND

let areAllEven = nums.every(el => el % 2 == 0); // flase
let areAllOdd = [3, 7, 17, 99, 103].every(el => el % 2 != 0); // true

// some: Returns true if even one element of array gives true for some function. Else returns false.
// It is very similar to logical OR

let isEven = nums.some(el => el % 2 == 0); // true
let isOdd = [3, 7, 17, 98, 103, 52].some(el => el % 2 != 0); // true

// every and some gives only one boolean value: true or false

// reduce

let max = [2, 30, 47, 218, 57 ,38, 20, 264, 30].reduce((result, el) => {
  if(result > el) return result;
  else return el;
});
// max -> 264

let finalResult = [1, 2, 3, 4].reduce((res, el) => res + el);
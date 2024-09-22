// part 8
// PQ

// Q1

let arr1 = [260, 10, 20, 40, 27400, 4570, 360, 26890];
let arr2 = [92, 106, 20, 40, 4627, 4570, 36970, 290, 0];

let check1 = (arr1.every((el) => el % 10 == 0)); //true
let check2 = (arr2.every((el) => el % 10 == 0)); //false

let min = arr1.reduce((min, el) => {
  if(min < el) return min;
  else return el;
});

function getMin(nums) {

  let min = nums.reduce((min, el) => {
    if(min < el) return min;
    else return el;
  });

  return min;
}

function add(a, b, c = 0, d = 0, e = 0) {
  return a+b+c+d+e;
}

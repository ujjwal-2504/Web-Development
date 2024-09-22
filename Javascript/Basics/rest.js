function sum(...args) { // arguments

  for(let i = 0; i < args.length; i++) {
    console.log("You gave us: ", args[i]);
  }
}

// function min() {
//   console.log(arguments);
//   console.log(arguments.length);
// }

function add(...args) {
  return args.reduce((add, el) => el + add);
}

function min(...values) {
  return values.reduce((min, el) => {
    if(min < el) return min;
    else return el;
  });
}

// function min(msg,...values) {
//   console.log(msg);
//   return values.reduce((min, el) => {
//     if(min < el) return min;
//     else return el;
//   });
// }
let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  // alert("Form Summitted");
});

// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   console.dir(form);
  
//   // let user = form.elements[0];
//   // let pass = form.elements[1];

//   let user = this.elements[0];
//   let pass = this.elements[1];

//   console.dir(pass);
//   console.dir(user.value);
//   console.dir(pass.value);

//   alert(`Hey, ${user.value}, your password is set to ${pass.value}`);
// });

let user = form.elements[0];

user.addEventListener('change', function() {
  console.log("Changed event");
  console.log(`Final value = ${user.value}`);
});

user.addEventListener('input', function() {
  console.log("Input event");
  console.log(`Final value = ${user.value}`);
});
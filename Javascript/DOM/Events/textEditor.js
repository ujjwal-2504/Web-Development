let p = document.querySelector('p');
let inp = document.querySelector('input');

inp.addEventListener('input', function() {

  p.innerText = inp.value;
});

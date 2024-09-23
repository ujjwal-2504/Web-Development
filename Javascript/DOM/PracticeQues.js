
let body = document.querySelector('body');

// Q1.

let p1 = document.createElement('p');
p1.innerText = "Hey, I'm red!!";
p1.classList.add('red');

body.append(p1);

// Q2.

let h3 = document.createElement('h3');
h3.innerText = "Hii I am blue h3";
h3.classList.toggle('blue');

body.append(h3);

// Q3.

let div = document.createElement('div');
let h1 = document.createElement('h1');
let p2 = document.createElement('p');

h1.innerText = "I'm in div";
p2.innerText = "Me to";
div.classList.add('box');

div.append(h1);
div.append(p2);

body.prepend(div);

// Assignment Questions

// Q1.

let btn = document.createElement('button');
btn.innerText = "Click me";

body.prepend(btn);

// Q2.

btn.setAttribute('placeholder', 'username');
btn.setAttribute('id', 'btn');

// Q3.

btn.classList.add('btn');

// Q4.

h1.classList.add('h1');

// Q5.

let p3 = document.createElement('p');
p3.innerHTML = "Hii my name is <b>Ujjwal</b>";

body.append(p3);
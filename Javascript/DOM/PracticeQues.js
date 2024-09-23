// Q1.

let p1 = document.createElement('p');
p1.innerText = "Hey, I'm red!!";
p1.classList.add('red');

document.querySelector('body').append(p1);

// Q2.

let h3 = document.createElement('h3');
h3.innerText = "Hii I am blue h3";
h3.classList.toggle('blue');

document.querySelector('body').append(h3);

// Q3.

let div = document.createElement('div');
let h1 = document.createElement('h1');
let p2 = document.createElement('p');

h1.innerText = "I'm in div";
p2.innerText = "Me to";
div.classList.add('box');

div.append(h1);
div.append(p2);

document.querySelector('body').prepend(div);
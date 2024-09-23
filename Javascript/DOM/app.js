// let images = document.getElementsByClassName("oldImg");

// for(let i = 0; i < images.length; i++) {
//   images[i].src = "assets/spiderman_img.png";
//   console.log(`Value of image no. ${i} has changed`);
// }

// console.dir(document.querySelector("h1"));

// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelector("div a").className);

// console.dir(document.querySelectorAll("div a"));

let anchor = document.querySelectorAll(".box li a");

for(let i = 0; i < anchor.length; i++) {
  anchor[i].style.color = "green"; // inline style
}

for(link of anchor) {
  link.style.color = "purple"; // inline style
}

// document.querySelector(".box").classList.add("Yellow");
// Show And Remove Heading

// Select all the sections
// const sections = document.querySelectorAll('section');

// let timeout; // Variable to hold the timeout
// let isTitleDisplayed = false; // Flag to track if the title is displayed

// // Function to handle the event
// function showAndRemoveHeading(event) {
//   const section = event.target; // The section that triggered the event

//   // Clear the previous timeout if the mouse enters again quickly
//   clearTimeout(timeout);

//   // Prevents multiple titles from being displayed simultaneously
//   if (!isTitleDisplayed)
//     isTitleDisplayed = true;


//   // Check if the heading already exists
//   if (!section.querySelector('.title')) {

//       let title = document.createElement('h2');
//       title.innerText = section.getAttribute('dataTitle');
//       title.classList.add('title');

//       section.appendChild(title);

      
//         setTimeout(() => {
//           if (title) {
//               section.removeChild(title);
//               isTitleDisplayed = false; // Reset the flag when title is removed
//               console.log("hi");
//           }
//         }, 700);
  
      
//   }
// }

// // Add event listener to each section
// sections.forEach(section => {
//     section.addEventListener('mouseenter', showAndRemoveHeading);
// });



// Section 1

let currStatus = document.querySelector('h5');

let btn = document.querySelector('#section1 button');

let check = false;

btn.addEventListener('click', function() {

  if(!check) {
    currStatus.innerText = "Friends";
    currStatus.style.color = "green";
    btn.innerText = "Remove Friend";
  }
  else {
    currStatus.innerText = "Stranger";
    currStatus.style.color = "red";
    btn.innerText = "Add Friend";
  }

  check = !check;

});

// Section 2

let s2 = document.querySelector('#section2');
let cards = document.querySelectorAll('.s2-card')

cards.forEach(card => {
  
  let heart = card.querySelector("i");

  card.addEventListener('dblclick', function() {
  
    heart.style.transform = "translate(-50%, -50%) scale(1)";
    heart.style.opacity = 0.8;
    
    setTimeout(() => {
      heart.style.opacity = 0;
    }, 1000);
    
    setTimeout(() => {
      heart.style.transform = "translate(-50%, -50%) scale(0)";
    }, 2000);
  });
  
});



// Section 3

let s3 = document.querySelector('#section3');
let cursor = document.querySelector('.cursor');

s3.addEventListener('mousemove', function(dets) {
  
  cursor.style.left = dets.x + 'px';
  cursor.style.top = dets.y + 'px';
});

// Section 4

let elem = document.querySelectorAll('.elem');

elem.forEach(function(val) {

  console.log(val.childNodes[3]);

  val.addEventListener('mouseenter', function() {
    val.childNodes[3].style.opacity = 1;
  });

  val.addEventListener('mouseleave', function() {
    val.childNodes[3].style.opacity = 0;
  });

  val.addEventListener('mousemove', function(dets) {
    val.childNodes[3].style.left = dets.x + 'px';
    val.childNodes[3].style.right = dets.y + 'px';
  });

});

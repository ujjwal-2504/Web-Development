// let jsonRes = 
// `{"fact": "Cats must have fat in their diet because they can't produce it on their own.", "length": 76}`;

// let validRes = JSON.parse(jsonRes);

// console.log(validRes);
// console.log(validRes.fact);


// let student = {
//   name: "Ujjwal Bhadani",
//   marks: 99.9,
//   address: "Ranchi, Jharkhand",
//   pinCode: 834001,
// }

// let jsonReq = JSON.stringify(student);
// console.log(jsonReq);

// let url = 'https://catfact.ninja/fact';

// async function getFacts() {

//   try {
//     let res = await fetch(url);
//     console.log(res);
//     let data = await res.json();
//     console.log(data.fact);

    // let res2 = await fetch(url);
    // let data2 = await res2.json();
    // console.log(data2.fact);
//   }
//   catch(err) {
//     console.log("The error is: ", err);
//   }
  
//   console.log("bye");
// }


// fetch(url)
//   .then((response) => {
//     // console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log("data1 = ", data.fact);
//     return fetch(url);
//   })
//   .then((response) => {
//     // console.log(response);
//     return response.json();
//   })
//   .then((data2) => {
//     console.log("data2 = ", data2.fact);
//   })
//   .catch((err) => {
//     console.log("Error :- ", err);
//   })

//   console.log("I am learning");


// Cat Fact

let btn = document.querySelector('button');

btn.addEventListener('click', async () => {

  let dspyFact = document.querySelector('#fact');

  let fact = await getFacts();
  // console.log(fact);

  dspyFact.innerText = fact;
  
});



let url = 'https://catfact.ninja/fact';

async function getFacts() {

  try {
    let res = await axios.get(url);
    // console.log(res.data.fact);
    return res.data.fact;

    // let res2 = await axios(url);
    // let data2 = await res2.json();
    // console.log(data2.fact);
  }
  catch(err) {
    // console.log("The error is: ", err);
    return "No fact found";
  }
}


// Dog Image

let url2 = "https://dog.ceo/api/breeds/image/random";

async function getImage() {

  try {
    let res = await axios.get(url2);
    return (res.data.message);
  }
  catch(error) {
    console.log(error);
    return "/";
  }
}

let btn2 = document.querySelector('#dogBtn');

btn2.addEventListener('click', async () => {

  let img = await getImage();

  let dogImg = document.querySelector('#dogImg');
  dogImg.setAttribute('src', img);
  console.log(img);
})

let url3 = "https://icanhazdadjoke.com/"

let btn3 = document.querySelector('#jokeBtn');

async function getJoke() {

  try {

    const config = { headers: {Accept: "application/json"} };
    const config2 = { headers: {Accept: "text/plain"} };
    let res = await axios.get(url3, config2);
    return res.data;
  }
  catch(err) {
    console.log(err);
    return "No joke";
  }
}

btn3.addEventListener('click', async () => {

  let dspyJoke = document.querySelector('#joke');

  let joke = await getJoke();

  dspyJoke.innerText = joke;
});

//university details

let url4 = "http://universities.hipolabs.com/search?name="

// let country = 'india';

async function getColleges(country) {

  try {
    let res = await axios.get(url4 + country);
    return res.data;
  }
  catch(err) {
    return [];
  }
}

let searchBtn = document.querySelector('#searchBtn');

searchBtn.addEventListener('click', async () => {

  console.log("btn was clicked");
  let country = document.querySelector('input').value;

  let colleges = await getColleges(country);
  console.log(colleges);

  Show(colleges);

});


function Show(collArr) {

  let list = document.querySelector('#list');
  list.innerHTML = "";

  for(college of collArr) {
    
    let listItem = document.createElement('li');
    listItem.innerText = college.name;
    list.appendChild(listItem);
  }
  
}

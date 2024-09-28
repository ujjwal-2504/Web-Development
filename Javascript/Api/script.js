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

let url = 'https://catfact.ninja/fact';

async function getFacts() {

  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);
  }
  catch(err) {
    console.log("The error is: ", err);
  }
  
  console.log("bye");
}




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


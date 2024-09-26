// function saveToDB (data, success, failure) {

//   let internetSpeed = Math.floor(Math.random() * 10) + 1;

//   if(internetSpeed > 4) {
//     success();
//   }
//   else {
//     failure();
//   }
// }

// saveToDB(
//   "Learning", 

//   () => {
//     console.log("Success: Your data is saved");

//     saveToDB(
//       "Going on", 

//       () => {
//         console.log("Success2: data2 is saved");

//         saveToDB(
//           "Reached",

//           () => {
//             console.log("Success3: data3 is saved");
//           },

//           () => {
//             console.log("Failure3: data3 is not saved");
//           }
//         )
        
//       },
//       () => {
//         console.log("Failure2: data2 not saved!!");
//       }

//     )
//   }, 
//   () => {
//     console.log("Failure: Weak connection!!, Your data is not saved");
//   }
// );

function saveToDB (data) {

  return new Promise((resolve, reject) => {

    let internetSpeed = Math.floor(Math.random() * 10) + 1;

    if(internetSpeed > 4) {
      resolve("Success: data is saved");
    }
    else {
      reject("Failue: Weak connection!! data not saved");
    }
  });

}

// let request = saveToDB("Ujjwal"); // request = promise object.

// saveToDB("Ujjwal")
//   .then(() => {
//     console.log("Promise is resolved");
//   })
//   .catch(() => {
//     console.log("Promise is rejected");
//   });

// Promises chaining

// saveToDB("Ujjwal")
//   .then(() => {
//     console.log("Data1 is saved");
//     saveToDB("How are you")
//       .then(() => {
//         console.log("Data2 is saved");
//       })
//   })
//   .catch(() => {
//     console.log("Promise is rejected");
//   });


saveToDB("Ujjwal")
  .then((result) => {
    console.log("Data1 is saved");
    console.log("Result of Promise: ", result);
    return saveToDB("How are you");
  })
  .then((result) => {
    console.log("Data2 is saved");
    console.log("Result of Promise: ", result);
    return saveToDB("What are you doing");
  })
  .then((result) => {
    console.log("Data3 is saved");
    console.log("Result of Promise: ", result);
  })
  .catch((error) => {
    console.log("Promise is rejected");
    console.log("Error of promise: ", error);
  });

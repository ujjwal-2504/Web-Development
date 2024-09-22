// let names = ["Flash", "Sonic", "Makkari", "XLR8", "JetRay"];

// let Winner = names[0];
// let RunnerUp = names[1];
// console.log(Winner, RunnerUp);

// ↓ short form

let names = ["Flash", "Sonic", "Makkari", "XLR8", "JetRay"];
        let [Winner, RunnerUp, ...others] = names;
//index ->     0         1

console.log(Winner, RunnerUp);

// Winner -> Flash
// RunnerUp -> Sonic
// others -> ['Makkari', 'XLR8', 'JetRay']

// destructure object

const student = {
  name: "Vayu",
  age: 15,
  class: 9,
  subjects: ["Hindi", "Maths", "Science", "Computer", "English"],
  username: "vaayuu12",
  password: "VaYu12%34",
  // city: "Tata",
};

// let username = student.username;
// let password = student.password;

// ↓ short form

let {username, password} = student;
//    key       key

let {username: user, password: pass, city: place = "Ranchi"} = student;
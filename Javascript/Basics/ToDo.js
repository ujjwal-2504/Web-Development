let todo = [];

let req = prompt("Enter your request");

while (true) {

  if(req == "quit") {

    console.log("Quitting todo app");
    break;
  }
  else if(req == "list") {

    console.log('--------------------------------');
    for(let i = 0; i < todo.length; i++) {
      console.log(i+1, todo[i]);
    }
    console.log('--------------------------------');
  }
  else if(req == "add") {

    let task = prompt("Enter the task you want to add");
    todo.push(task);
    console.log("Task Added");
  }
  else if(req == "delete") {

    let index = prompt("Enter the task index you want to delete");
    
    if(index-1 >= 0 && index -1 < todo.length) {
      
      todo.splice(index-1, 1);
      console.log(`task ${index} deleted`);
    }
    else {
      console.log("not exist");
    }

  }
  else {
    console.error("Wrong request");
  }

  req = prompt("Enter your next request");
}
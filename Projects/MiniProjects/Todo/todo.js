let inputTask = document.querySelector('input');
let list = document.querySelector('ul');
let addButton = document.querySelector('button');


addButton.addEventListener('click', function() {
  
  if(inputTask.value === '' || inputTask.value === ' ') {
    alert("Enter your task");
    inputTask.value = '';
  }
  else {
    
    let taskText = inputTask.value;
    let newTask = document.createElement('li');
    newTask.innerText = taskText;
    
    // delete btn
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add('deleteBtn');
    newTask.append(deleteBtn);

    // add task
    list.append(newTask);

    inputTask.value = '';
  }
});


list.addEventListener('click', function(event){

  if(event.target.nodeName == 'BUTTON') {

    let task = event.target.parentElement;
    console.log("deleted");
    task.remove();
  }

});



// let deleteBtns = document.querySelectorAll(".deleteBtn");

// for(deleteBtn of deleteBtns) {
  
//   deleteBtn.addEventListener('click', function() {
    
//     let par = this.parentElement;
//     console.log(par)
//     par.remove();
//   });

// }

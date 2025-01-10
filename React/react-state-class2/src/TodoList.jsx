import "./TodoList.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "Sample task", id: uuidv4() }]);
  let [newTask, setNewTask] = useState("");

  let addNewTask = () => {
    if (newTask == "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTask, id: uuidv4() }];
    });
    setNewTask("");
  };

  let updateTodoValue = (event) => {
    setNewTask(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return { ...todo, task: todo.task.toUpperCase() };
      });
    });
  };

  let upperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, task: todo.task.toUpperCase() };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="main">
      <h2 style={{ borderBottom: "1px solid white" }}>Todo List</h2>
      <input
        type="text"
        placeholder="Enter your task"
        value={newTask}
        onChange={updateTodoValue}
      />
      <button className="add" onClick={addNewTask}>
        Add task
      </button>
      <h3 className="center">
        Task to do{" "}
        <button className="smallBtn" onClick={upperCaseAll}>
          Uppercase all
        </button>
      </h3>
      <ul className="list">
        {todos.map((todo) => (
          <li className="task" key={todo.id}>
            <span>{todo.task}</span>
            <span className="btnContainer">
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button onClick={() => upperCaseOne(todo.id)}>Uppercase</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

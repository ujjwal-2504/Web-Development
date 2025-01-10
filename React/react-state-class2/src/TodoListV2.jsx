import "./TodoList.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoListV2() {
  let [todos, setTodos] = useState([
    { task: "Make todo list", id: uuidv4(), isDone: false },
  ]);
  let [newTask, setNewTask] = useState("");

  let addNewTask = () => {
    if (newTask == "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTask, id: uuidv4(), isDone: false }];
    });
    setNewTask("");
  };

  let updateTodoValue = (event) => {
    setNewTask(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };

  let allDone = () => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return { ...todo, isDone: !todo.isDone };
      });
    });
  };

  let done = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isDone: !todo.isDone };
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
      <hr />
      <h3 className="center">
        Task to do{" "}
        <button className="smallBtn" onClick={allDone}>
          All ✅
        </button>
      </h3>
      <ul className="list">
        {todos.map((todo) => (
          <li className={`task ${todo.isDone && "dull"}`} key={todo.id}>
            <span>{todo.task}</span>
            <span className="btnContainer">
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button onClick={() => done(todo.id)}>✅</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

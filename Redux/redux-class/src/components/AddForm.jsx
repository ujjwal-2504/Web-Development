import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  let submitHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter a task"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button>Add Task</button>
      </form>
    </>
  );
}

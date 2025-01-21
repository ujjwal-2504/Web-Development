import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

let style = {
  textDecoration: "line-through",
  color: "grey",
};

export default function Todo() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  // const mark = (status, id) => {
  //   dispatch(markAsDone(id));
  // };

  return (
    <>
      <h2>Todo List App</h2>
      <AddForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? style : {}}>{todo.task}</span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => dispatch(markAsDone(todo.id))}>Done</button>
          </li>
        ))}
      </ul>
    </>
  );
}

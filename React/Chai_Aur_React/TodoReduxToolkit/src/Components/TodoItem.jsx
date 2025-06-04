import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  updateTodo,
  toggleComplete,
} from "../app/features/todo/todoSlice";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(todo.isCompleted);
  const [text, setText] = useState(todo.text);
  const dispatch = useDispatch();

  const editTodo = () => {
    dispatch(updateTodo(todo.id, text));
    setIsTodoEditable(false);
  };

  const toggle = () => {
    dispatch(toggleComplete(todo.id));
  };

  return (
    <div
      className={`flex items-center border rounded-lg px-4 py-4 gap-x-4 shadow-md duration-300 text-white ${
        todo.isCompleted
          ? "bg-gray-800 border-gray-700"
          : "bg-gray-900 border-gray-800"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer w-5 h-5 rounded-md border-2 border-gray-600 text-green-500 focus:ring-1 focus:ring-gray-600 transition-colors duration-200"
        checked={todo.isCompleted}
        onChange={toggle}
      />
      <input
        type="text"
        className={`border outline-none flex-1 bg-transparent rounded-lg px-3 py-2 text-white placeholder-gray-500 transition-colors duration-200 ${
          isTodoEditable
            ? "border-gray-600 bg-gray-800 focus:border-gray-500"
            : "border-transparent"
        } ${todo.isCompleted ? "line-through text-gray-500" : ""}`}
        value={text}
        onChange={(e) => setText(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-10 h-10 rounded-lg text-lg border border-gray-700 justify-center items-center bg-gray-800 hover:bg-gray-700 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-gray-600"
        onClick={() => {
          if (todo.isCompleted) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.isCompleted}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-10 h-10 rounded-lg text-lg border border-gray-700 justify-center items-center bg-gray-800 hover:bg-red-900 shrink-0 transition-colors duration-200 hover:border-red-800 focus:outline-none focus:ring-1 focus:ring-gray-600"
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;

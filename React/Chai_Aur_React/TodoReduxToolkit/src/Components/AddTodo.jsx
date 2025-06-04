import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input) return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-lg mb-2"
    >
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-gray-600 transition-colors duration-200"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-gray-600"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default AddTodo;

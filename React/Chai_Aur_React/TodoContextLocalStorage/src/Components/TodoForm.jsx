import { useState } from "react";
import { useTodo } from "../Context";

function TodoForm() {
  const [todoMsg, setTodoMsg] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todoMsg) return;

    const newTodo = {
      todoMsg,
      completed: false,
    };
    addTodo(newTodo);
    setTodoMsg("");
  };

  return (
    <form onSubmit={add} className="flex gap-3 items-center">
      <input
        type="text"
        placeholder="Write Todo..."
        className="flex-1 border border-white/20 rounded-xl px-4 py-3 outline-none duration-300 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 focus:bg-white/30 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-xl px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shrink-0 hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400/50"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;

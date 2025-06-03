import { useState } from "react";
import { useTodo } from "../Context";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todoMsg);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todoMsg });
    setIsTodoEditable(false);
  };

  const toggle = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex items-center border border-white/20 rounded-2xl px-4 py-4 gap-x-4 shadow-lg backdrop-blur-sm duration-300 text-white hover:shadow-xl transition-all ${
        todo.completed
          ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-400/30"
          : "bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-400/30"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer w-5 h-5 rounded-md border-2 border-white/30 text-green-500 focus:ring-2 focus:ring-green-400/50 transition-all duration-200"
        checked={todo.completed}
        onChange={toggle}
      />
      <input
        type="text"
        className={`border outline-none flex-1 bg-transparent rounded-lg px-3 py-2 text-white placeholder-white/70 transition-all duration-200 ${
          isTodoEditable
            ? "border-white/40 bg-white/10 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50"
            : "border-transparent"
        } ${todo.completed ? "line-through text-white/70" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-10 h-10 rounded-xl text-lg border border-white/20 justify-center items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm shrink-0 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-10 h-10 rounded-xl text-lg border border-white/20 justify-center items-center bg-white/10 hover:bg-red-500/20 backdrop-blur-sm shrink-0 transition-all duration-200 hover:scale-105 hover:border-red-400/50 focus:outline-none focus:ring-2 focus:ring-red-400/50"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;

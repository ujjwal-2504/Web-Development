import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function Todos() {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <div className="flex flex-col gap-4">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="w-full transform hover:scale-[1.02] transition-all duration-200"
          >
            <TodoItem todo={todo} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Todos;

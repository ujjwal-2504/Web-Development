import { useState, useEffect } from "react";
import "./App.css";
import { TodoProvider } from "./Context";
import { TodoForm, TodoItem } from "./Components";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen py-8 px-4">
        <div className="w-full max-w-3xl mx-auto bg-white/10 backdrop-blur-md shadow-2xl rounded-3xl px-8 py-10 text-white border border-white/20">
          <h1 className="text-4xl font-bold text-center mb-12 mt-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Manage Your Todos
          </h1>
          <div className="mb-8">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-col gap-4">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="w-full transform hover:scale-[1.02] transition-all duration-200"
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
          {todos.length === 0 && (
            <div className="text-center py-12 text-white/60">
              <p className="text-xl">No todos yet. Add one above!</p>
            </div>
          )}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;

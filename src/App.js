import "./App.css";
import { useState, useEffect } from "react";

import TodoList from "./components/TodoList/TodoList";
import Filter from "./components/Filter/Filter";

import todoData from "./data/todo.json";

function App() {
  const [todo, setTodo] = useState(() => {
    const saved = localStorage.getItem("todo");
    return saved ? JSON.parse(saved) : todoData;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const handleDelete = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodo((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodo = todo.filter((todo) =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <Filter value={filter} onChange={(e) => setFilter(e.target.value)} />

      <TodoList
        todo={filteredTodo}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
    </div>
  );
}

export default App;

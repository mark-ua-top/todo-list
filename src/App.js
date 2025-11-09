import "./App.css";
import { useState } from "react";

import TodoList from "./components/TodoList/TodoList";
import Filter from "./components/Filter/Filter";
import CreateTask from "./components/CreateTask/CreateTask";
import Stats from "./components/Stats/Stats";
import todoData from "./data/todo.json";

function App() {
  const saved = localStorage.getItem("todo");

  let initialData = todoData;
  if (saved && saved.length > 0) {
    initialData = JSON.parse(saved);
  }

  const [todo, setTodo] = useState(initialData);
  const [filter, setFilter] = useState("");

  const saveToLocal = (data) => {
    localStorage.setItem("todo", JSON.stringify(data));
  };

  const handleAdd = (text) => {
    if (!text || text.trim() === "") return;

    const newTodo = { id: Date.now(), text, completed: false };
    const updated = [newTodo, ...todo];
    setTodo(updated);
    saveToLocal(updated);
  };

  const handleDelete = (id) => {
    const updated = todo.filter((item) => {
      if (item.id !== id) return item;
      return false;
    });
    setTodo(updated);
    saveToLocal(updated);
  };

  const handleToggle = (id) => {
    const updated = todo.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodo(updated);
    saveToLocal(updated);
  };

  const filteredTodo = todo.filter((item) => {
    if (item.text.toLowerCase().includes(filter.toLowerCase())) return item;
    return false;
  });

  let total = todo.length;
  let completed = 0;
  for (let i = 0; i < todo.length; i++) {
    if (todo[i].completed) completed++;
  }

  return (
    <div className="App">
      <CreateTask onAdd={handleAdd} />
      <Stats total={total} completed={completed} />
      <Filter value={filter} onChange={(event) => setFilter(event.target.value)} />
      <TodoList
        todo={filteredTodo}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
    </div>
  );
}

export default App;

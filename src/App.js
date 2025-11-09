import React, { Component } from "react";
import "./App.css";

import TodoList from "./components/TodoList/TodoList";
import Filter from "./components/Filter/Filter";
import CreateTask from "./components/CreateTask/CreateTask";
import Stats from "./components/Stats/Stats";
import todoData from "./data/todo.json";

class App extends Component {
  constructor(props) {
    super(props);
    const saved = localStorage.getItem("todo");
    this.state = {
      items: saved ? JSON.parse(saved) : todoData,
      filterText: "",
    };
  }

  save = (data) => {
    localStorage.setItem("todo", JSON.stringify(data));
  };

  add = (text) => {
    if (!text.trim()) return;
    const newItem = { id: Date.now(), text, completed: false };
    const updated = [newItem, ...this.state.items];
    this.setState({ items: updated }, () => this.save(this.state.items));
  };

  remove = (id) => {
    const updated = this.state.items.filter((i) => i.id !== id);
    this.setState({ items: updated }, () => this.save(this.state.items));
  };

  toggle = (id) => {
    const updated = this.state.items.map((i) =>
      i.id === id ? { ...i, completed: !i.completed } : i
    );
    this.setState({ items: updated }, () => this.save(this.state.items));
  };

  handleFilterChange = (e) => {
    this.setState({ filterText: e.target.value });
  };

  render() {
    const { items, filterText } = this.state;
    const filtered = items.filter((i) =>
      i.text.toLowerCase().includes(filterText.toLowerCase())
    );
    const total = items.length;
    const completed = items.filter((i) => i.completed).length;

    return (
      <div className="App">
        <CreateTask onAdd={this.add} />
        <Stats total={total} completed={completed} />
        <Filter value={filterText} onChange={this.handleFilterChange} />
        <TodoList todo={filtered} onDelete={this.remove} onToggle={this.toggle} />
      </div>
    );
  }
}

export default App;

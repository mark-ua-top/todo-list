import { Component } from "react";
import "./App.css";

import TodoList from "./components/TodoList/TodoList";
import Filter from "./components/Filter/Filter";
import CreateTask from "./components/CreateTask/CreateTask";
import Stats from "./components/Stats/Stats";
import Modal from "./components/Modal/Modal";
import todoData from "./data/todo.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      filterText: "",
      modalMessage: null,
      modalTimer: 0,
      adding: false,
    };
    this.modalInterval = null;
  }

  showModal = (message, seconds) => {
    if (this.modalInterval) clearInterval(this.modalInterval);
    this.setState({ modalMessage: message, modalTimer: seconds });

    this.modalInterval = setInterval(() => {
      this.setState(
        (prevState) => ({ modalTimer: prevState.modalTimer - 1 }),
        () => {
          if (this.state.modalTimer <= 0) {
            clearInterval(this.modalInterval);
            this.setState({ modalMessage: null, modalTimer: 0 });
          }
        }
      );
    }, 1000);
  };

  hideModal = () => {
    if (this.modalInterval) clearInterval(this.modalInterval);
    this.setState({ modalMessage: null, modalTimer: 0 });
  };

  componentDidMount() {
    const saved = localStorage.getItem("todo");
    this.setState({ items: saved ? JSON.parse(saved) : todoData });
    this.showModal("Завантажується сторінка", 1);
  }

  componentWillUnmount() {
    if (this.modalInterval) clearInterval(this.modalInterval);
  }

  add = (text) => {
    if (!text.trim()) return;
    this.setState({ adding: true });
    this.showModal("Додається завдання, зачекайте", 2);

    setTimeout(() => {
      const newItem = { id: Date.now(), text, completed: false };
      this.setState(
        (prevState) => ({
          items: [newItem, ...prevState.items],
          adding: false,
        }),
        () => localStorage.setItem("todo", JSON.stringify(this.state.items))
      );
    }, 2000);
  };

  remove = (id) => {
    this.setState(
      (prevState) => ({ items: prevState.items.filter((i) => i.id !== id) }),
      () => localStorage.setItem("todo", JSON.stringify(this.state.items))
    );
  };

  toggle = (id) => {
    this.setState(
      (prevState) => ({
        items: prevState.items.map((i) =>
          i.id === id ? { ...i, completed: !i.completed } : i
        ),
      }),
      () => localStorage.setItem("todo", JSON.stringify(this.state.items))
    );
  };

  handleFilterChange = (event) => {
    this.setState({ filterText: event.target.value });
  };

  render() {
    const { items, filterText, modalMessage, modalTimer, adding } = this.state;
    const filtered = items.filter((i) =>
      i.text.toLowerCase().includes(filterText.toLowerCase())
    );
    const total = items.length;
    const completed = items.filter((i) => i.completed).length;

    return (
      <div className="App">
        {modalMessage && (
          <Modal message={`${modalMessage} (${modalTimer})`} onClose={this.hideModal} />
        )}
        <CreateTask onAdd={this.add} disabled={adding} />
        <Stats total={total} completed={completed} />
        <Filter value={filterText} onChange={this.handleFilterChange} />
        <TodoList todo={filtered} onDelete={this.remove} onToggle={this.toggle} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  align-items: center;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  width: 400px;
  border: 1px solid #000;
  background: #757575ff;
  border-radius: 8px;
`;

const Text = styled.p`
  margin: 0;
  flex-grow: 1;
  color: ${(props) => (props.completed ? "gray" : "lightgray")};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  transition: color 0.2s, text-decoration 0.2s;
`;

const DeleteBtn = styled.button`
  padding: 5px 10px;
  border: none;
  background: #ff4d4d;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #d93636;
  }
`;

class TodoList extends Component {
  render() {
    const { todo, onDelete, onToggle } = this.props;

    return (
      <List>
        {todo.map((item) => (
          <Item key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => onToggle(item.id)}
            />
            <Text completed={item.completed}>{item.text}</Text>
            <DeleteBtn onClick={() => onDelete(item.id)}>Delete</DeleteBtn>
          </Item>
        ))}
      </List>
    );
  }
}

export default TodoList;

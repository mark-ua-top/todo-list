import styled, { css } from "styled-components";

const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  padding: 20px;
  width: 400px;
  border: 1px solid #000000;
  background: #757575ff;
  border-radius: 8px;
`;

const Text = styled.p`
  margin: 0;
  flex-grow: 1;
  color: lightgray;

  ${(props) =>
    props.$completed &&
    css`
      text-decoration: line-through;
      color: gray;
    `}
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

const TodoList = ({ todo, onDelete, onToggle }) => {
  return (
    <List>
      {todo.map((item) => (
        <Item key={item.id}>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => onToggle(item.id)}
          />
          <Text $completed={item.completed}>{item.text}</Text>
          <DeleteBtn onClick={() => onDelete(item.id)}>Delete</DeleteBtn>
        </Item>
      ))}
    </List>
  );
};

export default TodoList;

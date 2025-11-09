import { useState } from "react";
import styled from "styled-components";

const TaskForm = styled.form`
    display: flex;
    gap: 8px;
    margin: 16px auto 0 auto;
    justify-content: center;
`;

const TaskInput = styled.input`
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    max-width: 300px;
`;

const AddButton = styled.button`
    padding: 8px 16px;
    background-color: #28a745; 
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #218838;
    }
`;

export default function CreateTask({ onAdd }) {
    const [text, setText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text.trim() === "") return;
        onAdd(text);
        setText("");
    };

    return (
        <TaskForm onSubmit={handleSubmit}>
            <TaskInput
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder="Додайте завдання"
            />
            <AddButton type="submit">Додати</AddButton>
        </TaskForm>
    );
}

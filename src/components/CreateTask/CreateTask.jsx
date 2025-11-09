import React, { Component } from "react";
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

class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };
    }

    handleChange = (event) => {
        this.setState({ text: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { text } = this.state;
        if (text.trim() === "") return;
        this.props.onAdd(text);
        this.setState({ text: "" });
    };

    render() {
        const { text } = this.state;
        return (
            <TaskForm onSubmit={this.handleSubmit}>
                <TaskInput
                    type="text"
                    value={text}
                    onChange={this.handleChange}
                    placeholder="Додайте завдання"
                />
                <AddButton type="submit">Додати</AddButton>
            </TaskForm>
        );
    }
}

export default CreateTask;

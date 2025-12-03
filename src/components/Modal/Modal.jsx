import { Component } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Box = styled.div`
  background: #fff;
  padding: 20px 30px;
  border-radius: 8px;
  text-align: center;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  background: #28a745;
  color: white;
  border-radius: 4px;
  cursor: pointer;
`;

class Modal extends Component {
  render() {
    const { message, onClose } = this.props;
    return (
      <Overlay>
        <Box>
          <p>{message}</p>
          <Button onClick={onClose}>Закрити</Button>
        </Box>
      </Overlay>
    );
  }
}

export default Modal;

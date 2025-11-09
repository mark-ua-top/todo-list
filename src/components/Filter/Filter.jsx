import React, { Component } from "react";
import styled from "styled-components";

const InputFilter = styled.input`
  padding: 8px;
  width: 200px;
  border: 1px solid #aaa;
  border-radius: 4px;
  margin-left: 10px;
  font-size: 16px;
`;

const Des = styled.p`
  color: lightgray;
`;

class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <Des>
        Фільтер по імені
        <span>
          <InputFilter value={value} onChange={onChange} />
        </span>
      </Des>
    );
  }
}

export default Filter;

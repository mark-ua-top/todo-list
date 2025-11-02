import styled from "styled-components";

const InputFilter = styled.input`
  padding: 8px;
  width: 200px;
  border: 1px solid #aaa;
  border-radius: 4px;
  margin-left: 10px;
  font-size: 16px;
`;
const des = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
`;

export default function Filter({ value, onChange }) {
    return <>
        <p>Фільтер по імені <span>
            <InputFilter
                value={value}
                onChange={onChange}
            />
        </span></p>
    </>
}

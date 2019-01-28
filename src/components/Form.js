import React from "react";
import styled from "styled-components";

const MyForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  * {
    font-size: 2em;
  }
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid white;
  border-radius: 3px;
  color: white;
  padding: 10px;
  cursor: pointer;
  margin-top: 20px;
  width: 50%;
  outline: none;
  transition: 0.3s;
  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.8);
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  width: 50%;
  padding: 10px;
  outline: none;
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  &:focus {
    box-shadow: 0 10px 20px -8px rgba(255, 255, 255, 0.8);
  }
`;
const Form = props => {
  return (
    <MyForm onSubmit={props.submit}>
      <Input
        type="text"
        value={props.value}
        placeholder="Type your city"
        onChange={props.change}
      />
      <Button>Check the weather</Button>
    </MyForm>
  );
};

export default Form;

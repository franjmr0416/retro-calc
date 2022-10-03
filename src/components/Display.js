import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  border: none;
  width: 252px;
  height: 61px;
  background-color: rgb(0, 0, 0, 0);
  color: #ffa3a3;
  text-align: right;
  font-size: 4em;
  font-family: "DS-Digital";
  text-shadow: 2px 0px 5px #af005f, 0px 2px 15px #ff0000;
`;

const Screen = styled.div`
  width: 256px;
  height: 65px;
  border: 2px solid #fefefe;
  background-color: #380e08;
`;

const Container = styled.div`
  width: 266px;
  height: 75px;
  border: 2px solid #fefefe;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Display = () => {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);

    const isOversize = validateLength(input);
    console.log(isOversize);
  };
  const validateLength = (value) => {
    return value.length > 11 ? true : false;
  };
  return (
    <Container>
      <Screen>
        <Input onChange={handleInput} />
      </Screen>
    </Container>
  );
};
export default Display;

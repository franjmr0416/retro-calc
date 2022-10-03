import styled from "styled-components";

const Input = styled.input`
  border: none;
  width: 252px;
  height: 61px;
  background-color: rgb(0, 0, 0, 0);
  color: #ffa3a3;
  text-align: right;
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
  return (
    <Container>
      <Screen>
        <Input />
      </Screen>
    </Container>
  );
};
export default Display;

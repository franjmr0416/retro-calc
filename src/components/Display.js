import styled from 'styled-components'

const Input = styled.input`
  border: none;
  width: 252px;
  height: fit-content;
  background-color: rgb(0, 0, 0, 0);
  color: #ffa3a3;
  text-align: right;
  font-size: 4em;
  font-family: 'DS-Digital';
  text-shadow: 2px 0px 5px #af005f, 0px 2px 15px #ff0000;
`

const Screen = styled.div`
  width: 256px;
  height: fit-content;
  border-radius: 5px;
  background-color: #380e08;
`

const Container = styled.div`
  width: 266px;
  height: fit-content;
  padding: 0.5rem 0;
  border-radius: 3px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #bdbbb6;
  box-shadow: inset 0px 8px 0px rgba(0, 0, 0, 0.25);
`

const Display = (props) => {
  const { input } = props

  return (
    <Container>
      <Screen>
        <Input value={input} />
      </Screen>
    </Container>
  )
}
export default Display

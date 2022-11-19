import React from 'react'
import styled from 'styled-components'

const Center = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`

const Calculator = styled.div`
  background-color: black;
  padding: 1rem;
  border-radius: 10px;
  background-color: #cccac4;
  box-shadow: 0 5.2px 10.4px 0 rgba(0, 0, 0, 0.35),
    0 2.6px 3.9px 0 rgba(0, 0, 0, 0.25), inset 0 -2px 0 0 rgba(62, 64, 65, 0.5);
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const Main = ({ children }) => {
  return (
    <Center>
      <Calculator>
        <Column>{children}</Column>
      </Calculator>
    </Center>
  )
}

export default Main

import React from 'react'
import styled from 'styled-components'

const Shadow = styled.div`
  padding: 4px;
  background: #bdbbb6;
  box-shadow: inset 0px 8px 0px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`

const SolarCell = styled.div`
  height: 32px;
  width: 30px;
  background-color: #553d33;
  border-radius: 1px;
`
const Border = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100px;
  background-color: #30231d;
  padding: 2px 0;
  border-radius: 3px;
`
const Row = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 1rem;
`

const SolarCells = () => {
  return (
    <Row>
      <Shadow>
        <Border>
          <SolarCell />
          <SolarCell />
          <SolarCell />
        </Border>
      </Shadow>
    </Row>
  )
}

export default SolarCells

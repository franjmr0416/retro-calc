import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  background-color: white;
  padding: 0rem 0.5rem;
  border-radius: 5px;
`

const Text = styled.span`
  color: #cccac4;
  font-size: 2rem;
  font-weight: 400;
`
const Brand = styled.span`
  font-weight: 800;
`

const Model = () => {
  return (
    <Background>
      <Text>
        <Brand>Atomic </Brand>
        NXS-102
      </Text>
    </Background>
  )
}

export default Model

import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 1rem 0.5rem;
  max-width: 266px;
`

const Middle = ({ children }) => {
  return <Row>{children}</Row>
}

export default Middle

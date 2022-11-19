import React from 'react'
import styled from 'styled-components'

const Lineas = styled.div`
  width: 25.1px;
  height: 27px;
  background: #000000;
  mix-blend-mode: overlay;
  box-shadow: 2px 0px 0px rgba(0, 0, 0, 0.25), inset 2px 0px 0px #ffffff;
`

const Boton = styled.div`
  width: 34px;
  height: 31px;
  background: #4d4d4d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px -4px 0px #000000;
  border-radius: 4px;
`

const Fondo = styled.div`
  width: 74px;
  height: 32px;
  background: #181818;
  opacity: 0.8;
  box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`

const SwitchOn = () => {
  return (
    <Fondo>
      <Boton></Boton>
    </Fondo>
  )
}

export default SwitchOn

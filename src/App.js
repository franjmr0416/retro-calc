import Button from './components/Button'
import './App.css'
import LayoutButtons from './components/LayoutButtons'
import Display from './components/Display'
import { useState } from 'react'
import SwitchOn from './components/SwitchOn'
import Middle from './layouts/Middle'
import Model from './components/Model'
const App = () => {
  const [input, setInput] = useState('0')
  const [currentStack, setStack] = useState([])

  const calc = () => {
    try {
      const result = eval(input)
      setInput(result)
    } catch (error) {
      error instanceof SyntaxError ? setInput('Syntax_Error') : setInput(error)
    }
  }

  const handleClick = (value) => {
    switch (value) {
      case 'AC':
        setStack([])
        setInput('0')
        break
      case '=':
        calc()
        break
      default:
        setStack([...currentStack, value])
        input === '0' ? setInput(value) : setInput(input + value)
        break
    }
  }
  return (
    <div className='home'>
      <Display input={input} />
      <Middle>
        <Model />
      </Middle>

      <LayoutButtons>
        <Button onClick={() => handleClick('AC')} isAC>
          AC
        </Button>
        <Button onClick={() => handleClick('%')} isOperator>
          %
        </Button>
        <Button onClick={() => handleClick('+')} isOperator>
          +
        </Button>
        <Button onClick={() => handleClick('-')} isOperator>
          -
        </Button>

        <Button onClick={() => handleClick('7')}>7</Button>
        <Button onClick={() => handleClick('8')}>8</Button>
        <Button onClick={() => handleClick('9')}>9</Button>
        <Button onClick={() => handleClick('*')} isOperator>
          &times;
        </Button>

        <Button onClick={() => handleClick('4')}>4</Button>
        <Button onClick={() => handleClick('5')}>5</Button>
        <Button onClick={() => handleClick('6')}>6</Button>
        <Button onClick={() => handleClick('/')} isOperator>
          &divide;
        </Button>

        <Button onClick={() => handleClick('1')}>1</Button>
        <Button onClick={() => handleClick('2')}>2</Button>
        <Button onClick={() => handleClick('3')}>3</Button>

        <Button onClick={() => handleClick('=')} isEqualSign>
          =
        </Button>
        <Button onClick={() => handleClick('0')} isZeroSign>
          0
        </Button>
        <Button onClick={() => handleClick('.')}>.</Button>
      </LayoutButtons>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import TestButton from './components/testButton';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Welcome to React Ecosystem !<br />
      <TestButton title="Button1" color="yellow" /><br />
      <TestButton title="Button2" color="red" />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import react from '../public/React-icon.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <img src ={react} alt="react-logo" className="reactlogo"/>
      <p>Hello from the other side</p>
    </div>
  )
}

export default App

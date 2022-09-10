import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'
import React from "react";
import Header from "./components/Header"
import MainContent from './components/MainContent';
import Footer from './components/Footer';
function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App

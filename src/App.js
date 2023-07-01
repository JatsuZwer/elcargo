import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './components/Main/Main'
import Header from './components/Header/Header'
import Work from './components/Work/Work'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <Main />
        <Work />
        <Footer/>
      </div>
    </div>
  )
}

export default App

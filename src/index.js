import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Pads from './Components/Drumpad'
import './styles.css'

const App = () => {
  return (
    <div className="container" id="drum-machine">
      <div className="App">
        <h1>freeCodeCamp Drum-Machine</h1>
      </div>
      <div id="display" className="display">
        <Pads />
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
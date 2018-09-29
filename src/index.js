import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Pads from './Components/Drumpad'
import Tempo from './Components/Tempo'
import './styles.css'

const App = () => {
  return (
    <div className="container">
      <div className="App" id="drum-machine">
        <h1>freeCodeCamp Drum-Machine</h1>
        <div id="display" className="display">
          <Pads />
        </div>
      </div>
      <Tempo />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

import React, { Component } from 'react'
import Drumpad from './drumpad'
import '../../styles.css'

const noise = {
  q: '../src/assets/909clap.wav',
  w: '../src/assets/909ohh.wav',
  e: '../src/assets/909sn.wav',
  a: '../src/assets/fx_09.wav',
  s: '../src/assets/fx_10.wav',
  d: '../src/assets/sim_bass_23_01.wav',
  z: '../src/assets/sim_k02-0.wav',
  x: '../src/assets/rhythm77_bd.wav',
  c: '../src/assets/rhythm77_ch.wav'
}
const pads = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']

export default class Pads extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pad: 'q',
      note: null,
      keyDown: false
    }
    this.handlePadDown = this.handlePadDown.bind(this)
    this.handlePadUp = this.handlePadUp.bind(this)
  }

  handlePadDown(e) {
    console.log(e.target.id)
    let note = noise[e.target.id]
    this.setState({ note })
  }

  handlePadUp() {}

  componentWillMount() {
    console.log('hi', this.state.note)
  }

  render() {
    console.log(this.state.note)
    return (
      <div className="container">
        {pads.map((padName, i) => (
          <Drumpad
            key={i}
            id={padName.toLowerCase()}
            padName={padName}
            handlePadDown={this.handlePadDown}
            note={this.state.note}
            noise={noise}
          />
        ))}
        <audio id="myAudio">
          <source src={this.state.noise} type="audio/wav" />
        </audio>
      </div>
    )
  }
}

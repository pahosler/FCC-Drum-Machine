import React, { Component } from 'react'
import Drumpad from './Drumpad'
import '../../styles.css'

// document.getElementById("drum-machine")
// .addEventListener('keyup', (e) => {
//   console.log(e)
// })
// window.addEventListener("keydown", function (e) {
//     console.log(e.key)

// });
const noise = {
  Q: [require('../../assets/909clap.wav'), 'Techno 909clap'],
  W: [require('../../assets/909ohh.wav'), 'Techno 909ohh'],
  E: [require('../../assets/909sn.wav'), 'Techno 909sn'],
  A: [require('../../assets/fx_09.wav'), 'Techno fx_09'],
  S: [require('../../assets/fx_10.wav'), 'Techno fx_10'],
  D: [require('../../assets/sim_bass_23_01.wav'), 'Techno sim_bass_23_01'],
  Z: [require('../../assets/sim_k02-0.wav'), 'Techno sim_k02'],
  X: [require('../../assets/rhythm77_bd.wav'), 'Techno rhythm77_bd'],
  C: [require('../../assets/rhythm77_ch.wav'), 'Techno rhythm77_ch']
}
const pads = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
// const [q,w,e,a,s,d,z,x,c] = [...pads]

export default class Pads extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pad: '',
      note: null,
      noteName: ' ',
      keyDown: false
    }

    this.handlePad = this.handlePad.bind(this)
  }

  handlePad(e) {
    // console.log(e.target.id)
    let playNote = e // .target.id.toUpperCase()
    let note = noise[playNote][0]
    let noteName = noise[playNote][1]
    this.setState({ note, noteName })
  }

  componentDidMount() {
    let noteName = window.addEventListener('keyup', function(e) {
      return e.key.toUpperCase()
    })
    this.setState({ noteName })
  }

  render() {
    return (
      <div className="container">
        <div className="pads">
          {pads.map((padName, i) => (
            <Drumpad
              key={i}
              padName={padName}
              handlePad={this.handlePad}
              note={this.state.note}
              noise={noise}
            />
          ))}
        </div>
        <h3 className="soundname">{this.state.noteName}</h3>
      </div>
    )
  }
}

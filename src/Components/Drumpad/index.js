import React, { Component } from 'react'
import Drumpad from './Drumpad'
import '../../styles.css'

const noise = {
  //  Q: ['https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3','Cord_1'],
  Q: [require('../../assets/laser5.mp3'), 'Laser 5'],
  W: [require('../../assets/laser1.mp3'), 'Laser 1'],
  E: [require('../../assets/spaceTrash2.mp3'), 'Space Trash 2'],
  A: [require('../../assets/laser3.mp3'), 'Laser 3'],
  S: [require('../../assets/laser4.mp3'), 'Laser 4'],
  D: [require('../../assets/laser6.mp3'), 'Laser 6'],
  Z: [require('../../assets/laser7.mp3'), 'Laser 7'],
  X: [require('../../assets/threeTone1.mp3'), 'Three Tone One'],
  C: [require('../../assets/lowRandom.mp3'), 'Low Random']
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
    // this.handleKeydown = this.handleKeydown.bind(this)
  }

  handlePad(e) {
    // console.log(e.target.id)
    let playNote = e // .target.id.toUpperCase()
    let note = noise[playNote][0]
    let noteName = noise[playNote][1]
    this.setState({ note, noteName })
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
              handleKeydown={this.handleKeydown}
              noise={noise}
              pads={pads}
              note={this.state.note}
            />
          ))}
        </div>
        <h3 className="soundname">{this.state.noteName}</h3>
      </div>
    )
  }
}

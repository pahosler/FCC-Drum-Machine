import React, { Component } from 'react'
import '../../styles.css'

export default class Drumpad extends Component {
  constructor(props) {
    super(props)
    this.audioRef = React.createRef()
    this.mouseDown = this.mouseDown.bind(this)
  }

  mouseDown(e) {
    document.getElementById(this.props.padName).play()
    this.props.handlePad(e.target.id.toUpperCase())
  }
  componentDidMount() {
    document.addEventListener(
      'keydown',
      function (e) {
        let note = this.props.pads.includes(e.key.toUpperCase())
          ? e.key.toUpperCase()
          : 'A'
        document.getElementById(note).play()
        // this.props.handlePad(note)
      }.bind(this)
    )
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', e => {
      // this.
    })
  }

  render() {
    return (
      <div
        id={`${this.props.padName.toLowerCase()}`}
        className="drum-pad"
        onMouseDown={this.mouseDown}>
        <audio
          src={this.props.noise[this.props.padName][0]}
          id={this.props.padName}
          className="clip"
        />
        {this.props.padName}
      </div>
    )
  }
}

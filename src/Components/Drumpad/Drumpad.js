import React, { Component } from 'react'
import '../../styles.css'

export default class Drumpad extends Component {
  constructor(props) {
    super(props)
    this.audioRef = React.createRef()
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyup = this.handleKeyup.bind(this)
  }

  handleClick(e) {
    this.audioRef.current.play()
    this.props.handlePad(e.target.id)
  }
  handleKeyup(e) {
    this.audioRef.current.play()
    this.props.handlePad(e)
    console.log('--->', e)
  }

  render() {
    return (
      <div
        id={this.props.padName}
        className="drum-pad"
        onClick={this.handleClick}
        onKeyUp={this.handleKeyup}>
        <audio
          src={this.props.noise[this.props.padName][0]}
          id={this.props.padName}
          className="clip"
          ref={this.audioRef}>
          <source
            src={this.props.noise[this.props.padName][0]}
            type="audio/wav"
          />
        </audio>
        {this.props.padName}
      </div>
    )
  }
}

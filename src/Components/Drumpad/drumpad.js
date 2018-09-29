import React, { PureComponent } from 'react'
import '../../styles.css'

export default class Drumpad extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
        id={this.props.padName.toLowerCase()}
        className="drum-pad"
        onClick={this.props.handlePadDown}>
        {this.props.padName}
      </div>
    )
  }
}

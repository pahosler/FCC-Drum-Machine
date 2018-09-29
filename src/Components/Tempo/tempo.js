import React, { PureComponent } from 'react'

export default class SetTempo extends PureComponent {
  render() {
    return (
      <div className="tempo-container">
        <button id="tempoDown" className="tempoButton">
          <span className="set-tempo">-</span>
        </button>
        <div id="tempo-text">4/4</div>
        <button id="tempoUp" className="tempoButton">
          <span className="set-tempo">+</span>
        </button>
      </div>
    )
  }
}

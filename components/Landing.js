import React, { Component, PropTypes } from 'react'

export default class Landing extends Component {
  render() {
    return (
      <div id="section-home" className="heading-block title-center nobottomborder page-section">
        <h1>Welcome to CARSTAGRAM</h1>
        <span>Just what you need for browsing amazing <span className="color rotate t700">Lamborghini, Ferrari, Porsche</span> photos.</span>
      </div>
    )
  }
}

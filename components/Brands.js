import React, { Component, PropTypes } from 'react'

export default class Brands extends Component {
  render() {
    return (
        <li><a href={this.props.link}><img src={this.props.logo} alt={this.props.name}/></a></li>
    )
  }
}

Brands.propTypes = {
  name : PropTypes.string.isRequired,
  link : PropTypes.string.isRequired,
  logo : PropTypes.string.isRequired
}

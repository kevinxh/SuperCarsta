import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Brands extends Component {
  render() {
    return (
        <li><a href={`/${this.props.name}`} onClick={this.props.onClick(this.props.name)}><img src={this.props.logo} alt={this.props.name}/></a></li>
    )
  }
}

Brands.propTypes = {
  onClick: PropTypes.func.isRequired,
  name : PropTypes.string.isRequired,
  link : PropTypes.string.isRequired,
  logo : PropTypes.string.isRequired
}

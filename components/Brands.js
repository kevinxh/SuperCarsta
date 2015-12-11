import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Brands extends Component {
  render() {
    return (
        <li><Link to={`/${this.props.name}`}><img src={this.props.logo} alt={this.props.name}/></Link></li>
    )
  }
}

Brands.propTypes = {
  name : PropTypes.string.isRequired,
  link : PropTypes.string.isRequired,
  logo : PropTypes.string.isRequired
}

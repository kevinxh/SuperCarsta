import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Models extends Component {
  render() {
    return (
        <li><Link to={`/${this.props.brand}/${this.props.name}`}><img src={this.props.pic} alt={this.props.name}/></Link></li>
    )
  }
}

Models.propTypes = {
  name: PropTypes.string.isRequired,
  brand : PropTypes.string.isRequired,
  pic : PropTypes.string.isRequired
}

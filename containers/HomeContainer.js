import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Landing from '../components/Landing'
import BrandTable from '../components/BrandTable'

export default class HomeContainer extends Component {
  constructor(props) {
    super(props)

  }

  componentWillMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const { children } = this.props
    return(
    <div>
      <Landing/>
      <BrandTable/>
    </div>
  )
  }
}

HomeContainer.propTypes = {
  // Injected by React Router
  children: PropTypes.node
}

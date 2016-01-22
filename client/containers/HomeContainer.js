import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { chooseBrand } from '../actions/index'
import Landing from '../components/Landing'
import BrandTable from '../components/BrandTable'

export default class HomeContainer extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
    <div>
      <Landing/>
      <BrandTable />
    </div>
  )
  }
}

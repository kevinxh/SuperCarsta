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
    const { brand } = this.props
    console.log(brand)
    return(
    <div>
      <Landing/>
      <BrandTable chooseBrand={chooseBrand} />
    </div>
  )
  }
}

HomeContainer.propTypes = {
  brand: PropTypes.string
}

function mapStateToProps(state) {
  return {
    brand: state.brand
  }
}

export default connect(
  mapStateToProps,
  chooseBrand
)(HomeContainer)

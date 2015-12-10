import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadRepo, loadStargazers } from '../actions'

export default class ModelTable extends Component {
  render() {
    return (
      <h1>model table rendered!</h1>
    )
  }
}

ModelTable.propTypes = {
    brand: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  const brand = state.router.params
  return {
    brand
  }
}

export default connect(mapStateToProps, {
  loadRepo,
  loadStargazers
})(ModelTable)

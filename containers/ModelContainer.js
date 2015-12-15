import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import Landing from '../components/Landing'
import ModelTable from '../components/ModelTable'

export default class ModelContainer extends Component {
  constructor(props) {
    super(props)
  }


  componentWillReceiveProps(nextProps) {

  }

  render() {
    const { brand } = this.props
    return(
    <div>
      <Landing/>
      <ModelTable brand={brand}/>
    </div>
  )
  }
}

ModelContainer.propTypes = {
  // Injected by React Router
  brand: PropTypes.string
}

function mapStateToProps(state) {
  return {
    brand: state.router.params.brand
  }
}

export default connect(mapStateToProps, {
  pushState
})(ModelContainer)

import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import Routes from '../routes'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
          <Routes />
      </Provider>
    )
  }
}

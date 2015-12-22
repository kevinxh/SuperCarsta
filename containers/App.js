import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import Header from '../components/Header'
import { resetErrorMessage } from '../actions'

class App extends Component {

  render() {
    const { children } = this.props
    return (
      <div>
        <Header/>
        <section id="content">
          <div className="content-wrap">
            <div className="container clearfix">
              {children}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

App.propTypes = {
  // Injected by React Redux
  errorMessage: PropTypes.string,
  resetErrorMessage: PropTypes.func.isRequired,
  pushState: PropTypes.func.isRequired,
  // Injected by React Router
  children: PropTypes.node
}

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage,
  }
}

export default connect(mapStateToProps, {
  resetErrorMessage,
  pushState
})(App)

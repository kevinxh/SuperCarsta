import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import Explore from '../components/Explore'
import Header from '../components/Header'
import { resetErrorMessage } from '../actions'

class App extends Component {

  render() {
    const { children, inputValue } = this.props
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
  inputValue: PropTypes.string.isRequired,
  // Injected by React Router
  children: PropTypes.node
}

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage,
    inputValue: state.router.location.pathname.substring(1)
  }
}

export default connect(mapStateToProps, {
  resetErrorMessage,
  pushState
})(App)

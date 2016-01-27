import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'
import Header from '../components/Header'

class App extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchUser())
  }

  render() {
    const { userInfo, isFetching } = this.props
    console.log("username: ", userInfo.user_name)
    return (
      <div>
        <Header userName={userInfo.user_name}/>
        <section id="content">
          <div className="content-wrap">
            <div className="container clearfix">
            </div>
          </div>
        </section>
      </div>
    )
  }
}

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  userInfo: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const { isFetching, userInfo } = state.user
  return {
    isFetching,
    userInfo
  }
}

export default connect(mapStateToProps)(App)

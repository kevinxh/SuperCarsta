import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'
import Header from '../components/Header'
import Landing from '../components/Landing'
import BrandTable from '../components/BrandTable'
import UserModal from '../components/UserModal'
import Footer from '../components/Footer'

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
    return (
      <div>
        <Header userName={userInfo.user_name}/>
        <section id="content">
          <div className="content-wrapper">
            <div className="container clearfix">
              <Landing />
              {this.props.children}
            </div>
          </div>
        </section>
        <Footer />
        <UserModal userName={userInfo.user_name} userBio={userInfo.user_bio} userPic={userInfo.user_picture}/>
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

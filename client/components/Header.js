import React, { Component, PropTypes } from 'react'

export default class Header extends Component {

  render() {
    const userName = this.props.userName
    return (
  		<header id="header" className="full-header">
        <div id="header-wrap">
          <div className="container clearfix">
            <div id="primary-menu-trigger"><i className="icon-reorder"></i></div>
            <div id="logo">
              <a href="/" className="standard-logo" data-dark-logo="images/supercarsta.png"><img src="images/supercarsta.png" alt="SuperCarsta Logo"/></a>
            </div>
            <nav id="primary-menu" className="style-3">
              <ul>
                <li className="current"><a href="#" data-toggle="modal" data-target="#myModal"><div>
                  {userName}
                </div></a></li>
              </ul>
              <div id="top-search">
                <a href="#" id="top-search-trigger"><i className="icon-search3"></i><i className="icon-line-cross"></i></a>
                <form action="search.html" method="get">
                  <input type="text" name="q" className="form-control" value="" placeholder="Type &amp; Hit Enter.."/>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}


Header.propTypes = {
  userName: PropTypes.string
}
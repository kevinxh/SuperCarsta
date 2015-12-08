import React, { Component, PropTypes } from 'react'

export default class Header extends Component {
  render() {

    return (
  		<header id="header" className="full-header">

  			<div id="header-wrap">

  				<div className="container clearfix">

  					<div id="primary-menu-trigger"><i className="icon-reorder"></i></div>

  					<div id="logo">
  						<a href="index.html" className="standard-logo" data-dark-logo="images/logo-dark.png"><img src="images/logo.png" alt="Canvas Logo"/></a>
  						<a href="index.html" className="retina-logo" data-dark-logo="images/logo-dark@2x.png"><img src="images/logo@2x.png" alt="Canvas Logo"/></a>
  					</div>

  					<nav id="primary-menu" className="style-2">

  						<ul>
  							<li><a href="index.html"><div>Home</div></a></li>
  							<li className="mega-menu current"><a href="#"><div>Automotive Brands</div></a>
  								<div className="mega-menu-content style-2 col-4 clearfix">
  									<ul>
  										<li className="mega-menu-title"><a href="#"><div>Introduction</div></a>
  											<ul>
  												<li><a href="about.html"><div>About Us</div></a></li>
  												<li><a href="about-2.html"><div>About Us - Layout 2</div></a></li>
  												<li><a href="about-me.html"><div>About Me</div></a></li>
  												<li><a href="team.html"><div>Team Members</div></a></li>
  												<li><a href="jobs.html"><div>Careers</div></a></li>
  												<li><a href="side-navigation.html"><div>Side Navigation</div></a></li>
  												<li><a href="page-submenu.html"><div>Page Submenu</div></a></li>
  												<li><a href="sitemap.html"><div>Sitemap</div></a></li>
  											</ul>
  										</li>
  									</ul>
  									<ul>
  										<li className="mega-menu-title"><a href="#"><div>Utility</div></a>
  											<ul>
  												<li><a href="services.html"><div>Services - Layout 1</div></a></li>
  												<li><a href="services-2.html"><div>Services - Layout 2</div></a></li>
  												<li><a href="services-3.html"><div>Services - Layout 3</div></a></li>
  												<li><a href="faqs.html"><div>FAQs - Layout 1</div></a></li>
  												<li><a href="faqs-2.html"><div>FAQs - Layout 2</div></a></li>
  												<li><a href="faqs-3.html"><div>FAQs - Layout 3</div></a></li>
  												<li><a href="faqs-4.html"><div>FAQs - Layout 4</div></a></li>
  												<li><a href="maintenance.html"><div>Maintenance Page</div></a></li>
  											</ul>
  										</li>
  									</ul>
  									<ul>
  										<li className="mega-menu-title"><a href="#"><div>Layout Grids</div></a>
  											<ul>
  												<li><a href="full-width.html"><div>Full Width</div></a></li>
  												<li><a href="full-width-wide.html"><div>Full Width - Wide</div></a></li>
  												<li><a href="right-sidebar.html"><div>Right Sidebar</div></a></li>
  												<li><a href="left-sidebar.html"><div>Left Sidebar</div></a></li>
  												<li><a href="both-sidebar.html"><div>Both Sidebar</div></a></li>
  												<li><a href="both-right-sidebar.html"><div>Both Right Sidebar</div></a></li>
  												<li><a href="both-left-sidebar.html"><div>Both Left Sidebar</div></a></li>
  												<li><a href="blank-page.html"><div>Blank Page</div></a></li>
  											</ul>
  										</li>
  									</ul>
  									<ul>
  										<li className="mega-menu-title"><a href="#"><div>Miscellaneous</div></a>
  											<ul>
  												<li><a href="login-register.html"><div>Login/Register</div></a></li>
  												<li><a href="login-register-2.html"><div>Login/Register - Style 2</div></a></li>
  												<li><a href="login-register-3.html"><div>Login/Register - Style 3</div></a></li>
  												<li><a href="login-1.html"><div>Login - Style 1</div></a></li>
  												<li><a href="login-2.html"><div>Login - Style 2</div></a></li>
  												<li><a href="404.html"><div>404 - Simple Layout</div></a></li>
  												<li><a href="404-2.html"><div>404 - Parallax Image</div></a></li>
  												<li><a href="404-3.html"><div>404 - HTML5 Video</div></a></li>
  											</ul>
  										</li>
  									</ul>
  								</div>
  							</li>
  							<li><a href="#"><div>About</div></a></li>
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

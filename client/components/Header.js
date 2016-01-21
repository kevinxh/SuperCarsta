import React, { Component, PropTypes } from 'react'

export default class Header extends Component {

  componentDidMount() {
    this.refreshTextRotator()
  }

  componentDidUpdate() {
    this.refreshTextRotator()
  }

  refreshTextRotator() {
    $(document).ready(function(e) {
      $(".rotate").textrotator({
        animation: "fade",
        separator: ",",
        speed: 1500
      });
    });
  }

  render() {

    return (
  		      <header id="header" className="full-header">

        <div id="header-wrap">

          <div className="container clearfix">

            <div id="primary-menu-trigger"><i className="icon-reorder"></i></div>

            <div id="logo">
              <a href="/" className="standard-logo" data-dark-logo="images/supercarsta.png"><img src="images/supercarsta.png" alt="SuperCarsta Logo"/></a>
              <a href="/" className="retina-logo" data-dark-logo="images/supercarsta.png"><img src="supercarsta.png" alt="SuperCarsta Logo"/></a>
            </div>

            <nav id="primary-menu" className="style-4">

              <ul>
                <li className="current"><a href="/"><div>Home</div></a></li>
                <li className="mega-menu"><a href="#"><div>Automotive Brands</div></a>
                  <div className="mega-menu-content style-2 col-4 clearfix">
                    <ul>
                      <li className="mega-menu-title"><a href="#"><div>Europe</div></a>
                        <ul>
                          <li><a href="about-2.html"><div>Aston Martin</div></a></li>
                          <li><a href="about-me.html"><div>Audi</div></a></li>
                          <li><a href="team.html"><div>Bentley</div></a></li>
                          <li><a href="jobs.html"><div>BMW</div></a></li>
                          <li><a href="side-navigation.html"><div>Bugatti</div></a></li>
                          <li><a href="page-submenu.html"><div>Ferrari</div></a></li>
                          <li><a href="sitemap.html"><div>Lamborghini</div></a></li>
                          <li><a href="about.html"><div>Porsche</div></a></li>
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
                <li><a href="#" data-toggle="modal" data-target="#myModal"><div>Login</div></a></li>

                <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-body">
                  <div className="modal-content">
                    <div className="modal-body">
                      <h4>Authentication Policy</h4>
                      <p>According to Instagram's API Authentication Policy, it is required to login with your Instagram account to start using this app. </p>
                      <a href="https://api.instagram.com/oauth/authorize/?client_id=90ba6e4257404b0e87e28d9297d6ad93&redirect_uri=http://www.supercarsta.com/callback&response_type=code" className="button button-large button-dirtygreen btn-block center"><i className="icon-instagram"></i><span>Login with Instagram</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

import React, { Component, PropTypes } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="dark noborder footer_bg" >
			<div id="copyrights">
				<div className="container center clearfix">
					SuperCarsta is a thing made by <a href="http://www.kevin-he.com" target="_blank">Kevin He</a> | All Rights Reserved
				</div>
			</div>
		</footer>
    )
  }
}

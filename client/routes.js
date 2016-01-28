import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './containers/App'
import BrandTable from './components/BrandTable'
import ModelTable from './components/ModelTable'

export default class routes extends Component {
  render() {
    return (
      	<Router history={browserHistory}>
		  <Route path="/" component={App}>
		    <IndexRoute component={BrandTable} />
		    <Route path="/:brand"
		           component={ModelTable} />
		  </Route>
	  	</Router>
    )
  }
}
import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './containers/App'
import HomeContainer from './containers/HomeContainer'
import ModelContainer from './containers/ModelContainer'

export default (
	<Router history={browserHistory}>
	  <Route path="/" component={App}>
	    <IndexRoute component={HomeContainer} />
	    <Route path="/:brand"
	           component={ModelContainer} />
	  </Route>
  	</Router>
)

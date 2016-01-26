import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import HomeContainer from './containers/HomeContainer'
import ModelContainer from './containers/ModelContainer'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeContainer} />
    <Route path="/:brand"
           component={ModelContainer} />
  </Route>
)

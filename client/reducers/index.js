import * as types from '../constants/ActionTypes'
import { routerStateReducer as router } from 'redux-router'
import { combineReducers } from 'redux'

function auth(state = { 
	username : "unknown",
	token : "unknown" }, action) {
  switch (action.type) {
    case types.LOGIN:
      return {
      	username: action.username,
      	token: action.token
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  auth,
  router
})

export default rootReducer

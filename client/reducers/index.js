import * as types from '../constants/ActionTypes'
import { routeReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

function user(state = { 
	isFetching : false,
	userInfo : {} }, action) {
  switch (action.type) {
    case types.USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case types.USER_RECIEVE:
      return Object.assign({}, state, {
        isFetching: false,
        userInfo: action.userInfo
      })
    default:
      return state
  }
}

export default combineReducers({
  user,
  router: routeReducer
})


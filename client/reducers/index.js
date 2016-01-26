import * as types from '../constants/ActionTypes'
import { routerStateReducer as router } from 'redux-router'
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

const rootReducer = combineReducers({
  user,
  router
})

export default rootReducer

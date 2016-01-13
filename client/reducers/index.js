import * as types from '../constants/ActionTypes'
import { routerStateReducer as router } from 'redux-router'
import { combineReducers } from 'redux'

function brand(state = { brand: "none" }, action) {
  switch (action.type) {
    case types.CHOOSE_BRAND:
      return action.brand

    default:
      return state
  }
}

const rootReducer = combineReducers({
  brand,
  router
})

export default rootReducer

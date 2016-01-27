import fetch from 'isomorphic-fetch'
import * as types from '../constants/ActionTypes'

export function userRequest() {
  return { type: types.USER_REQUEST }
}

export function userRecieve(userInfo) {
  console.log("userInfo!:",userInfo)
  return { 
  	type: types.USER_RECIEVE,
  	userInfo
  }
}

export function fetchUser() {
  return dispatch => {
    dispatch(userRequest())
    return fetch('http://www.supercarsta.com/user',{
      credentials:'same-origin'
    }).then(req => req.json())
      .then(json => dispatch(userRecieve(json)))
  }
}

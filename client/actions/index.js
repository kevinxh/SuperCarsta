import * as types from '../constants/ActionTypes'

export function chooseBrand(text) {
  return { type: types.CHOOSE_BRAND,  text }
}

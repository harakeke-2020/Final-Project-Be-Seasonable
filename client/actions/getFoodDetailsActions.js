import * as api from '../api/getFoodDetails'
import { showError } from './error'

export const GET_FOOD_DETAILS_REQUEST = 'GET_FOOD_DETAILS_REQUEST'
export const GET_FOOD_DETAILS_RECEIVED = 'GET_FOOD_DETAILS_RECEIVED'

export function getFoodDetailsRequest () {
  return {
    type: GET_FOOD_DETAILS_REQUEST
  }
}

export function getFoodDetailsReceived (foods) {
  return {
    type: GET_FOOD_DETAILS_RECEIVED,
    foods
  }
}

export function getFoodDetails (month, id) {
  return dispatch => {
    dispatch(getFoodDetailsRequest())
    return api.getFoodDetails(month, id)
      .then(foods => dispatch(getFoodDetailsReceived(foods)))
      .catch(err => dispatch(showError(err.message)))
  }
}

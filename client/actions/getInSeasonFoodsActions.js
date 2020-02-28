import * as api from '../api/getInSeasonFoods'
import { showError } from './error'

export const GET_IN_SEASON_FOODS_REQUEST = 'GET_IN_SEASON_FOODS_REQUEST'
export const GET_IN_SEASON_FOODS_RECEIVED = 'GET_IN_SEASON_FOODS_RECEIVED'

export function getInSeasonFoodsRequest () {
  return {
    type: GET_IN_SEASON_FOODS_REQUEST
  }
}

export function getInSeasonFoodsReceived (foods) {
  return {
    type: GET_IN_SEASON_FOODS_RECEIVED,
    foods
  }
}

export function getInSeasonFoods (month) {
  return dispatch => {
    dispatch(getInSeasonFoodsRequest())
    return api.getInSeasonFoods(month)
      .then(foods => dispatch(getInSeasonFoodsReceived(foods)))
      .catch(err => dispatch(showError(err.message)))
  }
}

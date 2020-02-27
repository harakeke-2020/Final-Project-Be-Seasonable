import * as api from '../api/getInSeasonFoods'
import { showError } from './error'

export const GET_IN_SEASON_FOODS_PENDING = 'GET_IN_SEASON_FOODS_PENDING'
export const GET_IN_SEASON_FOODS_SUCCESS = 'GET_IN_SEASON_FOODS_SUCCESS'

export function getInSeasonFoodsPending () {
  return {
    type: GET_IN_SEASON_FOODS_PENDING
  }
}

export function getInSeasonFoodsSuccess (foods) {
  return {
    type: GET_IN_SEASON_FOODS_SUCCESS,
    foods
  }
}

export function getInSeasonFoods (month) {
  return dispatch => {
    dispatch(getInSeasonFoodsPending())
    return api.getInSeasonFoods(month)
      .then(foods => dispatch(getInSeasonFoodsSuccess(foods)))
      .catch(err => dispatch(showError(err.message)))
  }
}

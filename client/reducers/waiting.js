import {
  GET_IN_SEASON_FOODS_REQUEST,
  GET_IN_SEASON_FOODS_RECEIVED
} from '../actions/getInSeasonFoodsActions'

import {
  GET_FOOD_DETAILS_REQUEST,
  GET_FOOD_DETAILS_RECEIVED
} from '../actions/getFoodDetailsActions'

export default function (waiting = false, action) {
  switch (action.type) {
    case GET_IN_SEASON_FOODS_REQUEST:
      return true
    case GET_IN_SEASON_FOODS_RECEIVED:
      return false
    case GET_FOOD_DETAILS_REQUEST:
      return true
    case GET_FOOD_DETAILS_RECEIVED:
      return false
    default:
      return waiting
  }
}

import { GET_IN_SEASON_FOODS_RECEIVED } from '../actions/getInSeasonFoodsActions'

export default function inSeasonFoodsReducer (state = null, action) {
  switch (action.type) {
    case GET_IN_SEASON_FOODS_RECEIVED:
      return action.foods

    default:
      return state
  }
}

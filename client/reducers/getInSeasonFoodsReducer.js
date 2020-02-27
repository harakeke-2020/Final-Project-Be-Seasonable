import { GET_IN_SEASON_FOODS_SUCCESS } from '../actions/getInSeasonFoodsActions'

export default function inSeasonFoodsReducer (state = [], action) {
  switch (action.type) {
    case GET_IN_SEASON_FOODS_SUCCESS:
      return action.foods

    default:
      return state
  }
}

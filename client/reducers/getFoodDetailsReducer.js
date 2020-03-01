import { GET_FOOD_DETAILS_RECEIVED } from '../actions/getFoodDetailsActions'

export default function foodDetailsReducer (state = null, action) {
  switch (action.type) {
    case GET_FOOD_DETAILS_RECEIVED:
      return action.foods

    default:
      return state
  }
}

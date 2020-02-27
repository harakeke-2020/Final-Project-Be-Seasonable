import {
  GET_IN_SEASON_FOODS_PENDING,
  GET_IN_SEASON_FOODS_SUCCESS
} from '../actions/getInSeasonFoodsActions'

export default function (pending = false, action) {
  switch (action.type) {
    case GET_IN_SEASON_FOODS_PENDING:
      return true
    case GET_IN_SEASON_FOODS_SUCCESS:
      return false
    default:
      return pending
  }
}

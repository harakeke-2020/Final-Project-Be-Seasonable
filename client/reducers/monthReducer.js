import {
  NEXT_MONTH,
  LAST_MONTH,
  CURRENT_MONTH
} from '../actions/monthAction'

const date = new Date()
const month = date.getMonth() + 1

export default function monthReducer (state = month, action) {
  switch (action.type) {
    case NEXT_MONTH:
      return action.month
    case LAST_MONTH:
      return action.month
    case CURRENT_MONTH:
      return action.month
    default:
      return state
  }
}

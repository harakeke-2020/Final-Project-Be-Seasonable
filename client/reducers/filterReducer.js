import { FILTER_CHANGE } from '../actions/filter'

export default function filterReducer (state = 'all', action) {
  switch (action.type) {
    case FILTER_CHANGE:
      return action.filter
    default:
      return state
  }
}

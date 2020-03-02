import { combineReducers } from 'redux'
import foodList from './getInSeasonFoodsReducer'
import error from './error'
import waiting from './waiting'
import month from './monthReducer'
import filter from './filterReducer'

export default combineReducers({
  foodList,
  error,
  waiting,
  month,
  filter
})

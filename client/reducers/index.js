import { combineReducers } from 'redux'
import foodList from './getInSeasonFoodsReducer'
import error from './error'
import waiting from './waiting'
import details from './getFoodDetailsReducer'
import month from './monthReducer'

export default combineReducers({
  foodList,
  error,
  waiting,
  details,
  month
})

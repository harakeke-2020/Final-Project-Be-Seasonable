import { combineReducers } from 'redux'
import foodList from './getInSeasonFoodsReducer'
import error from './error'
import waiting from './waiting'

export default combineReducers({
  foodList,
  error,
  waiting
})

import { combineReducers } from 'redux'
import foodList from './getInSeasonFoodsReducer'
import error from './error'
import pending from './pending'

export default combineReducers({
  foodList,
  error,
  pending
})

import { FILTER_CHANGE } from '../actions/filter'
import filterReducer from './filterReducer'

test('filter reducers returns right value with FILTER_CHANGE action', () => {
  const mockAction = {
    type: FILTER_CHANGE,
    filter: 'testFilter'
  }

  const result = filterReducer('all', mockAction)
  expect(result).toBe('testFilter')
})

test('default returns all', () => {
  const mockAction = {
    type: 'blah blah',
    filter: 'testFilter'
  }

  const result = filterReducer('all', mockAction)
  expect(result).toBe('all')
})

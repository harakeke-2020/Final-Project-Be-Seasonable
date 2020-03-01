import {
  NEXT_MONTH,
  LAST_MONTH,
  CURRENT_MONTH
} from '../actions/monthAction'

import monthReducer from './monthReducer'

const date = new Date()
const month = date.getMonth() + 1

test('NEXT_MONTH returns month', () => {
  const mockAction = {
    type: NEXT_MONTH,
    month: 1
  }
  const reducerOutput = monthReducer(month, mockAction)
  expect(reducerOutput).toBe(1)
})

test('LAST_MONTH returns month', () => {
  const mockAction = {
    type: LAST_MONTH,
    month: 1
  }
  const reducerOutput = monthReducer(month, mockAction)
  expect(reducerOutput).toBe(1)
})

test('CURRENT returns current month', () => {
  const mockAction = {
    type: CURRENT_MONTH,
    month: month
  }
  const reducerOutput = monthReducer(month, mockAction)
  expect(reducerOutput).toBe(month)
})

test('default returns current month', () => {
  const mockAction = {
    type: 'blah blah blah',
    month: 1
  }
  const reducerOutput = monthReducer(month, mockAction)
  expect(reducerOutput).toBe(month)
})

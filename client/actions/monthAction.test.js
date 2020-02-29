import {
  getNextMonth,
  getLastMonth,
  getCurrentMonth,
  NEXT_MONTH,
  LAST_MONTH,
  CURRENT_MONTH
} from './monthAction'

test('getNextMonth passes the right type and month when it is passed 12', () => {
  const action = getNextMonth(12)
  expect(action.type).toBe(NEXT_MONTH)
  expect(action.month).toBe(1)
})

test('getNextMonth action returns right type and month', () => {
  const action = getNextMonth(3)
  expect(action.type).toBe(NEXT_MONTH)
  expect(action.month).toBe(4)
})

test('getLastMonth action returns right type and month when passed 1', () => {
  const action = getLastMonth(1)
  expect(action.type).toBe(LAST_MONTH)
  expect(action.month).toBe(12)
})

test('getLastMonth action returns right type and month when passed 1', () => {
  const action = getLastMonth(3)
  expect(action.type).toBe(LAST_MONTH)
  expect(action.month).toBe(2)
})

test('getCurrentMonth gets right type and current month', () => {
  const date = new Date()
  const month = date.getMonth() + 1
  const action = getCurrentMonth()
  expect(action.type).toBe(CURRENT_MONTH)
  expect(action.month).toBe(month)
})

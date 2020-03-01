import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { renderWithRedux } from '../tests/test-utils'
import { getMonthName } from '../utils'

import MonthNav from './MonthNav'

const date = new Date()
const month = date.getMonth() + 1

describe('MonthNav works properly', () => {
  it('MonthNav renders current month by default', () => {
    const { getByTestId } = renderWithRedux(<MonthNav />, {
      initialState: {
        month: month
      }
    })
    const monthName = getMonthName(month)
    const renderOutcome = getByTestId('default')
    expect(renderOutcome).toContainHTML(monthName)
  })

  it('MonthNav renders current month and viewed month when they don\'t match', () => {
    const { getByTestId } = renderWithRedux(<MonthNav />, {
      initialState: {
        month: month - 1
      }
    })
    const monthName = getMonthName(month - 1)
    const renderOutcome = getByTestId('viewing')
    expect(renderOutcome).toContainHTML(monthName)
  })

  it('MonthNav to not render detault p tag when viewing alternative months', () => {
    const { queryByTestId } = renderWithRedux(<MonthNav />, {
      initialState: {
        month: month - 1
      }
    })
    const nullOutcome = queryByTestId('default')
    expect(nullOutcome).toBeNull()
  })

  it('MonthNav shows current month button when viewing other months', () => {
    const { getByTestId } = renderWithRedux(<MonthNav />, {
      initialState: {
        month: month - 1
      }
    })
    const currentMonthName = getMonthName(month)
    const currentMonthButton = getByTestId('currentMonthButton')
    expect(currentMonthButton).toContainHTML(currentMonthName)
  })
})

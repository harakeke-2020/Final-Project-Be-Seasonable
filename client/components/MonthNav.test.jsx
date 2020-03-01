import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { renderWithRedux } from '../tests/test-utils'

import MonthNav from './MonthNav'

const date = new Date()
const month = date.getMonth() + 1

const getMonthName = (month) => {
  switch (month) {
    case 1:
      return 'January'
    case 2:
      return 'Feburary'
    case 3:
      return 'March'
    case 4:
      return 'Apirl'
    case 5:
      return 'May'
    case 6:
      return 'June'
    case 7:
      return 'July'
    case 8:
      return 'August'
    case 9:
      return 'September'
    case 10:
      return 'October'
    case 11:
      return 'November'
    case 12:
      return 'December'
  }
}

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

  const monthName = getMonthName(month - 1)
  const currentMonthName = getMonthName(month)

  it('MonthNav renders current moneth and viewed month when they don\'t match', () => {
    const { getByTestId } = renderWithRedux(<MonthNav />, {
      initialState: {
        month: month - 1
      }
    })
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
    const currentMonthButton = getByTestId('currentMonthButton')
    expect(currentMonthButton).toContainHTML(currentMonthName)
  })
})

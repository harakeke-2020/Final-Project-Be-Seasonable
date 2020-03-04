import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { renderWithRedux } from '../tests/test-utils'

import FoodItem from './FoodItem'

describe('import flag functions', () => {
  it('import flag does not render when nzGrown is true', () => {
    const mockFood = {
      id: 2,
      name: 'Avocados',
      reoName: 'Awakato',
      month: 2,
      price: 8.26,
      image: '/path',
      nzGrown: true,
      lastMonth: 7,
      firstMonth: 3
    }

    const { queryByTestId } = renderWithRedux(<FoodItem food={mockFood}/>)
    const importFlag = queryByTestId('import')
    expect(importFlag).toBeNull()
  })

  it('import flag renders when nzGrown is false', () => {
    const mockFood = {
      id: 2,
      name: 'Avocados',
      reoName: 'Awakato',
      month: 2,
      price: 8.26,
      image: '/path',
      nzGrown: 0,
      lastMonth: 7,
      firstMonth: 3
    }

    const { getByTestId } = renderWithRedux(<FoodItem food={mockFood}/>)
    const importFlag = getByTestId('import')
    expect(importFlag).toContainHTML('Imported year round')
  })
})

describe('last month flag functions', () => {
  const month = 2
  it('last month does not render lastMonth !== props.month', () => {
    const mockFood = {
      id: 2,
      name: 'Avocados',
      reoName: 'Awakato',
      month: 2,
      price: 8.26,
      image: '/path',
      nzGrown: true,
      lastMonth: 7,
      firstMonth: 3
    }

    const { queryByTestId } = renderWithRedux(<FoodItem food={mockFood} month={month}/>)
    const endOfSeasonFlag = queryByTestId('last-month')
    expect(endOfSeasonFlag).toBeNull()
  })

  it('endOfSeason Flag renders correctly when lastMonth === props.month', () => {
    const mockFood = {
      id: 2,
      name: 'Avocados',
      reoName: 'Awakato',
      month: 2,
      price: 8.26,
      image: '/path',
      nzGrown: 0,
      lastMonth: 2,
      firstMonth: 3
    }

    const { getByTestId } = renderWithRedux(<FoodItem food={mockFood} month={month}/>)
    const endOfSeasonFlag = getByTestId('last-month')
    expect(endOfSeasonFlag).toContainHTML('End of season!')
  })
})

describe('new season flag functions', () => {
  const month = 2
  it('new season flag does not render firstMonth !== props.month', () => {
    const mockFood = {
      id: 2,
      name: 'Avocados',
      reoName: 'Awakato',
      month: 2,
      price: 8.26,
      image: '/path',
      nzGrown: true,
      lastMonth: 7,
      firstMonth: 3
    }

    const { queryByTestId } = renderWithRedux(<FoodItem food={mockFood} month={month}/>)
    const newSeasonFlag = queryByTestId('first-month')
    expect(newSeasonFlag).toBeNull()
  })

  it('new season Flag renders correctly when firstMonth === props.month', () => {
    const mockFood = {
      id: 2,
      name: 'Avocados',
      reoName: 'Awakato',
      month: 2,
      price: 8.26,
      image: '/path',
      nzGrown: 0,
      lastMonth: 4,
      firstMonth: 2
    }

    const { getByTestId } = renderWithRedux(<FoodItem food={mockFood} month={month}/>)
    const newSeasonFlag = getByTestId('first-month')
    expect(newSeasonFlag).toContainHTML('Just in!')
  })
})

import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { renderWithRedux } from '../tests/test-utils'

import FoodList from './FoodList'

const mockFoods = [
  {
    id: 1,
    name: 'Apple',
    reoName: 'āporo',
    price: 1.25,
    image: '/path',
    nzGrown: true,
    lastMonth: 6,
    firstMonth: 2
  },
  {
    id: 2,
    name: 'Banana',
    reoName: 'panana',
    price: 2.50,
    image: '/path',
    nzGrown: true,
    lastMonth: 10,
    firstMonth: 3
 }
]

describe('FoodList tests', () => {
  it('Renders a heading on load', () => {
    const { getAllByTestId } = renderWithRedux(<FoodList />, {
      initialState: {
        foodList: mockFoods
      }
    })
    const foodItems = getAllByTestId('foodItem')
    expect(foodItems).toHaveLength(2)
  })
})

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
    image: '/path'

  },
  {
    id: 2,
    name: 'Banana',
    reoName: 'panana',
    price: 2.50,
    image: '/path'
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

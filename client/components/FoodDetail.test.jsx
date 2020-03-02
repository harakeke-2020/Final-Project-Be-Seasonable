import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { renderWithRedux } from '../tests/test-utils'
import FoodDetail from './FoodDetail'
import { Route } from 'react-router-dom'

const mockFoods = [
  {
    id: 2,
    name: 'Avocados',
    reoName: 'Awakato',
    month: 1,
    price: 7.86,
    image: '/avocados.png',
    nzGrown: 1,
    lastMonth: 3,
    firstMonth: 7,
    details: ''
  },
  {
    id: 2,
    name: 'Avocado',
    reoName: 'Awakato',
    month: 1,
    price: 7.86,
    image: '/avocados.png',
    nzGrown: 0,
    lastMonth: null,
    firstMonth: null,
    details: ''
  }
]

describe('FoodDetail tests', () => {
  it('FoodDetail renders the selected foods reoName', () => {
    // get h1 by data-testid tag  (use getByTestId)
    const { findByTestId } = renderWithRedux(
      <Route path='/food/:id/:index'>
        <FoodDetail />
      </Route>, {
        initialState: {
          food: mockFoods[0],
          month: 1
        },
        route: '/food/2/0'
      })
    findByTestId('reo-name')
      .then(elem => expect(elem).toBeVisible())
  })
  it('', () => {
    
  })
})

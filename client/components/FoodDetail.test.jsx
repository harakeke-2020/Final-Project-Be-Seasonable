import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { renderWithRedux } from '../tests/test-utils'
import FoodDetail from './FoodDetail'

const mockDetails = [
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
  }
]

describe('FoodDetails tests', () => {
  it('FoodDetails renders a single Food Object', () => {
    // get h1 by data-testid tag  (use getByTestId)
  })
})

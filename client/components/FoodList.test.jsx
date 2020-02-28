import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { renderWithRedux } from '../tests/test-utils'

import FoodList from './Foodlist'

describe('FoodList tests', () => {
  it('Renders a heading on load', () => {
    const { getByTestId } = renderWithRedux(<FoodList />)
    const heading = getByTestId('foodlistheading')
    expect(heading).toBeVisible()
  })
})

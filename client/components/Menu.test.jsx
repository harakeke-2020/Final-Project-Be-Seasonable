import React from 'react'

import '@testing-library/jest-dom/extend-expect'
import { renderWithRedux } from '../tests/test-utils'

import Menu from './Menu'

test('Menu component renders title', () => {
  const { getByTestId } = renderWithRedux(<Menu/>)
  const title = getByTestId('title')
  expect(title).toContainHTML('Be Seasonable')
})

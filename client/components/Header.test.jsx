import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

import Header from './Header'

test('Header loads header', () => {
  const { getByTestId } = render(<Header />)
  const headerElement = getByTestId('header')
  expect(headerElement).toBeVisible()
  expect(headerElement).toContainHTML('Shop seasonal')
})

it('Renders a heading on load', () => {
  const { getByTestId } = render(<Header />)
  const heading = getByTestId('foodlistheading')
  expect(heading).toBeVisible()
})

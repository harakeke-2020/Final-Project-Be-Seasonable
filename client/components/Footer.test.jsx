import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Footer from './Footer'

test('footer return a footer', () => {
  const { getByTestId } = render(<Footer />)
  const footerElement = getByTestId('footer')

  expect(footerElement).toBeVisible()
  expect(footerElement).toHaveTextContent('Food price data sourced from Figure.NZ under CC-BY license')
})

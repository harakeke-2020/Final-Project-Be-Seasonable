import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

import About from './About'

describe('About component tests', () => {
  it('About loads about', () => {
    const { getByTestId } = render(<About />)
    const aboutElement = getByTestId('about')
    const title = getByTestId('title')
    expect(aboutElement).toBeVisible()
    expect(aboutElement).toContainElement(title)
  })
  it('About loads about', () => {
    const { getByTestId } = render(<About />)
    const aboutElement = getByTestId('about')
    const title = getByTestId('title')
    expect(aboutElement).toBeVisible()
    expect(aboutElement).toContainElement(title)
  })
})

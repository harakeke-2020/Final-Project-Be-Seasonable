import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { renderWithRedux } from '../tests/test-utils'
import ErrorComponent from './Error'

describe('Error component redux tests', () => {
  it('true renders error message', () => {
    const { getByTestId } = renderWithRedux(<ErrorComponent />, {
      initialState: {
        error: true
      }
    })
    const error = getByTestId('error')
    expect(error).toBeVisible()
  })

  it('false renders nothing', () => {
    const { container } = renderWithRedux(<ErrorComponent />, {
      initialState: {
        error: false
      }
    })
    expect(container.textContent).toBe('')
  })
})

import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { renderWithRedux } from '../tests/test-utils'
import Error from './Error'

describe('Error component redux tests', () => {
  it('true renders error message', () => {
    const { getByTestId } = renderWithRedux(<Error />, {
      initialState: {
        error: true
      }
    })
    const error = getByTestId('error')
    expect(error).toBeVisible()
  })

  it('false renders nothing', () => {
    const { container } = renderWithRedux(<Error />, {
      initialState: {
        error: false
      }
    })
    expect(container.textContent).toBe('')
  })
})

describe('Snapshot tests - Error component', () => {
  it('renders correctly with an error', () => {
    const { container } = renderWithRedux(
      <Error />, {
        initialState: {
          error: 'Test error message'
        }
      }
    )

    expect(container).toMatchSnapshot()
  })
  it('renders correctly with no error', () => {
    const { container } = renderWithRedux(
      <Error />
    )

    expect(container).toMatchSnapshot()
  })
})

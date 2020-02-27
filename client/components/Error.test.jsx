import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { renderWithRedux } from '../tests/test-utils'
import ErrorComponent from './Error'

test('Renders error message when error is true', () => {
  const { getTestById } = renderWithRedux(<ErrorComponent />, {
    intialState: {
      error: true
    }
  })
  const error = getTestById('error')
  expect(error).toBeVisible()
})

test('Renders null when error is false', () => {
  const { queryByTestId } = renderWithRedux(<ErrorComponent />, {
    initialState: {
      error: false
    }
  })
  const error = queryByTestId('error')
  expect(error).toBeNull()
})

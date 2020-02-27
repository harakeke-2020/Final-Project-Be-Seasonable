import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { renderWithRedux } from '../tests/test-utils'

import Waiting from './Waiting'

test('Renders gif placeholder while pending is true', () => {
  const { getByTestId } = renderWithRedux(<Waiting />, {
    initialState: {
      pending: true
    }
  })
  const waiting = getByTestId('waiting')
  expect(waiting).toBeVisible()
})

test('renders Null while pending is false', () => {
  const { queryByTestId } = renderWithRedux(<Waiting />, {
    initialState: {
      pending: false
    }
  })
  expect(queryByTestId('waiting')).toBeNull()
})

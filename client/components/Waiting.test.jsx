import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { renderWithRedux, renderWithReduxWithIgnore } from '../tests/test-utils'

import Waiting from './Waiting'

test('Renders gif placeholder while pending is true', () => {
  const { getByTestId } = renderWithReduxWithIgnore(<Waiting />, {
    initialState: {
      waiting: true
    }
  })
  const waiting = getByTestId('waiting')
  expect(waiting).toBeVisible()
})

test('renders Null while pending is false', () => {
  const { queryByTestId } = renderWithRedux(<Waiting />, {
    initialState: {
      waiting: false
    }
  })
  expect(queryByTestId('waiting')).toBeNull()
})

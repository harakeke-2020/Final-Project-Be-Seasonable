import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import reducer from '../reducers'
import thunkMiddleware from 'redux-thunk'

export const renderWithRedux = (
  ui,
  { initialState, store = createStore(reducer, initialState, applyMiddleware(thunkMiddleware)) } = {}
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  }
}

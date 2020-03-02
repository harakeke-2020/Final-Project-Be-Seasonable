import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import reducer from '../reducers'
import thunkMiddleware from 'redux-thunk'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

export const renderWithRedux = (
  ui,
  {
    initialState,
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    store = createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
  } = {}
) => {
  return {
    ...render(<Provider store={store}><Router history={history}>{ui}</Router></Provider>),
    store
  }
}

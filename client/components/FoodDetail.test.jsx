import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { renderWithReduxWithIgnore } from '../tests/test-utils'
import FoodDetail from './FoodDetail'
import { Route } from 'react-router-dom'

const mockFoods = [
  {
    id: 2,
    name: 'Avocados',
    reoName: 'Awakato',
    month: 1,
    price: 7.86,
    image: '/avocados.png',
    nzGrown: 1,
    lastMonth: 3,
    firstMonth: 7,
    details: ''
  },
  {
    id: 2,
    name: 'Avocado',
    reoName: 'Awakato',
    month: 2,
    price: 7.86,
    image: '/avocados.png',
    nzGrown: 0,
    lastMonth: null,
    firstMonth: null,
    details: ''
  }
]

describe('FoodDetail tests', () => {
  it('FoodDetail renders the selected foods reoName', () => {
    // get h1 by data-testid tag  (use getByTestId)
    const { findByTestId } = renderWithReduxWithIgnore(
      <Route path='/food/:id/:index' component={FoodDetail} />, {
        initialState: {
          food: mockFoods[0],
          month: 1
        },
        route: '/food/2/0'
      })
    return findByTestId('reo-name')
      .then(elem => expect(elem).toBeVisible())
  })
  it('Foods with a null first month are shown as being \'Available all year round.\'', () => {
    const { findByTestId } = renderWithReduxWithIgnore(
      <Route path='/food/:id/:index' component={FoodDetail} />, {
        initialState: {
          food: mockFoods[1],
          month: 1
        },
        route: '/food/2/1'
      })
    return findByTestId('all-year')
      .then(elem => expect(elem).not.toBeNull())
  })
  it('Foods with a valid first month are shown as being available from \'$(first month name) to $(last month name)\'', () => {
    // 'month-range'
    const { findByTestId } = renderWithReduxWithIgnore(
      <Route path='/food/:id/:index' component={FoodDetail} />, {
        initialState: {
          food: mockFoods[0],
          month: 1
        },
        route: '/food/2/0'
      })
    return findByTestId('month-range')
      .then(elem => expect(elem).not.toBeNull())
  })
  it('Foods with an nzGrown attribute of 1 are shown as being \'New Zealand grown\'', () => {
    // 'nz-grown'
    const { findByTestId } = renderWithReduxWithIgnore(
      <Route path='/food/:id/:index' component={FoodDetail} />, {
        initialState: {
          food: mockFoods[0],
          month: 1
        },
        route: '/food/2/0'
      })
    return findByTestId('nz-grown')
      .then(elem => expect(elem).not.toBeNull())
  })
  it('Foods with an nzGrown attribute of 0 are shown as being \'Grown overseas all year round. Food grown overseas has a higher carbon cost from transportation.\'', () => {
    // 'overseas-grown'
    const { findByTestId } = renderWithReduxWithIgnore(
      <Route path='/food/:id/:index' component={FoodDetail} />, {
        initialState: {
          food: mockFoods[1],
          month: 1
        },
        route: '/food/2/1'
      })
    return findByTestId('overseas-grown')
      .then(elem => expect(elem).not.toBeNull())
  })
})

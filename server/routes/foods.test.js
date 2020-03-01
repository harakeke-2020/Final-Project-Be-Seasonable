const request = require('supertest')

const server = require('../server')

const mockFoods = [
  {
    id: 1,
    name: 'Apple',
    reoName: 'āporo',
    price: 1.25,
    image: '/path',
    nzGrown: true,
    lastMonth: 1,
    firstMonth: 2

  },
  {
    id: 2,
    name: 'Banana',
    reoName: 'panana',
    price: 2.50,
    image: '/path',
    nzGrown: true,
    lastMonth: 1,
    firstMonth: 2
  }
]

jest.mock('../db/db.js', () => ({
  getInSeasonFoods: (month) => {
    if (month === 1) {
      return Promise.resolve(mockFoods)
    }
    if (month === 1000) {
      return Promise.reject(new Error())
    }
    return Promise.resolve(undefined)
  }
}))

const apiURL = '/api/v1/foods'

describe('Route testing for getting in season foods', () => {
  it('GET /:month route gets array of seasonal food objects', () => {
    return request(server)
      .get(`${apiURL}/1`)
      .then(res => {
        expect(res.body).toEqual(mockFoods)
      })
  })
  it('GET /:month route returns a 404 error if the month is not valid', () => {
    return request(server)
      .get(`${apiURL}/42`)
      .expect(404)
  })
  it('GET /:month route returns a 500 error if the month is not valid', () => {
    return request(server)
      .get(`${apiURL}/1000`)
      .expect(500)
  })
  it('GET /:month route returns the correct error message if the month is not valid', () => {
    return request(server)
      .get(`${apiURL}/1000`)
      .then(res => {
        expect(res.text).toBe('We had a problem getting in season foods. You can try refreshing the page.')
      })
  })
})

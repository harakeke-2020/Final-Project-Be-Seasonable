const request = require('supertest')

const server = require('../server')

const mockDetails = [
  {
    id: 1,
    name: 'Apple',
    reoName: 'āporo',
    price: 1.25,
    image: '/path',
    nzGrown: true,
    lastMonth: 1,
    firstMonth: 2,
    details: 'Apples are nice'
  },
  {
    id: 2,
    name: 'Banana',
    reoName: 'panana',
    price: 2.50,
    image: '/path',
    nzGrown: true,
    lastMonth: 1,
    firstMonth: 2,
    details: 'Bananas are nice'
  }
]

jest.mock('../db/db.js', () => ({
  getFoodDetails: (month, id) => {
    if (month === 1 && id === 1) {
      return Promise.resolve(mockDetails)
    }
    if (month === 1000 && id === 1000) {
      return Promise.reject(new Error())
    }
    return Promise.resolve(undefined)
  }
}))

const apiURL = '/api/v1/foods'

describe('Route testing for getting food details', () => {
  it('GET /:month/:id route gets array of food objects', () => {
    return request(server)
      .get(`${apiURL}/1/1`)
      .then(res => {
        expect(res.body).toEqual(mockDetails)
      })
  })
  it('GET /:month/:id route returns a 404 error if the month and id are not valid', () => {
    return request(server)
      .get(`${apiURL}/42/25`)
      .expect(404)
  })
  it('GET /:month/:id route returns a 500 error if the month and id are not valid', () => {
    return request(server)
      .get(`${apiURL}/1000/1000`)
      .expect(500)
  })
  it('GET /:month/:id route returns the correct error message if the month and id are not valid', () => {
    return request(server)
      .get(`${apiURL}/1000/1000`)
      .then(res => {
        expect(res.text).toBe('We had a problem getting food details. You can try refreshing the page.')
      })
  })
})

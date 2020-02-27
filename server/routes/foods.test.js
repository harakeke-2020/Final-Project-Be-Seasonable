const request = require('supertest')

const server = require('../server')

const mockFoods = [
  {
    id: 1,
    name: 'Apple',
    reoName: 'āporo',
    price: 1.25,
    image: '/path'

  },
  {
    id: 2,
    name: 'Banana',
    reoName: 'panana',
    price: 2.50,
    image: '/path'
  }
]

jest.mock('../db/db.js', () => ({
  getInSeasonFoods: () => Promise.resolve(mockFoods)
}))

const apiURL = '/api/v1/foods'

test('GET /:month route gets array of seasonal food objects', () => {
  return request(server)
    .get(`${apiURL}/1`)
    .then(res => {
      expect(res.body).toEqual(mockFoods)
    })
})
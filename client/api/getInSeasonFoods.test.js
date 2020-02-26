import nock from 'nock'
import { getInSeasonFoods } from './getInSeasonFoods'

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

const apiURL = '/api/v1/foods/'

test('getInSeasonFoods gets in season foods', (done) => {
  nock(/localhost/)
    .get(`${apiURL}1`)
    .reply(200, mockFoods)

  getInSeasonFoods(1)
    .then(foods => {
      expect(foods).toHaveLength(2)
      expect(foods).toEqual(mockFoods)
      done()
    })
})
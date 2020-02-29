import nock from 'nock'
import { getFoodDetails } from './getFoodDetails'

const mockDetails = [
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

test('getFoodDetails returns food details', (done) => {
  nock(/localhost/)
    .get(`${apiURL}1`)
    .reply(200, mockDetails)

  getFoodDetails(1)
    .then(details => {
      expect(details).toEqual(mockDetails)
      done()
    })
})

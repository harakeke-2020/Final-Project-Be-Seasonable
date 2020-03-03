import nock from 'nock'
import { getFoodDetails } from './getFoodDetails'

const mockDetails = {
  id: 1,
  name: 'Apple',
  reoName: 'Aporo',
  month: 2,
  price: 1.25,
  image: '/path',
  nzGrown: true,
  lastMonth: 1,
  firstMonth: 6,
  details: 'grown locally',
  averagePrice: 2.5,
  infoLink: 'facts',
  chart: 'WNZOpEoBKRyz4hBh-kpiumjjAxI9LmsSz'
}
const apiURL = '/api/v1/foods/'

test('getFoodDetails returns food details', (done) => {
  nock(/localhost/)
    .get(`${apiURL}1/2`)
    .reply(200, mockDetails)

  getFoodDetails(1, 2)
    .then(details => {
      expect(details).toEqual(mockDetails)
      done()
    })
})

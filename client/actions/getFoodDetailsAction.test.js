import { getFoodDetailsRequest, getFoodDetailsReceived, getFoodDetails } from './getFoodDetailsActions'

const mockFoods = [
  {
    id: 1,
    name: 'Apple',
    reoName: 'āporo',
    price: 1.25,
    image: '/path',
    nzGrown: true,
    lastMonth: 6,
    firstMonth: 2
  },
  {
    id: 2,
    name: 'Banana',
    reoName: 'panana',
    price: 2.50,
    image: '/path',
    nzGrown: true,
    lastMonth: 10,
    firstMonth: 3
  }
]

jest.mock('../api/getFoodDetails', () => ({
  getFoodDetails: (month, id) => Promise.resolve(mockFoods)
}))

describe('Get Food Details action tests', () => {
  it('getFoodDetailsRequest returns type of GET_FOOD_DETAILS_REQUEST', () => {
    expect(getFoodDetailsRequest().type).toBe('GET_FOOD_DETAILS_REQUEST')
  })

  it('getFoodDetailsReceived returns type of GET_FOOD_DETAILS_RECEIVED', () => {
    expect(getFoodDetailsReceived().type).toBe('GET_FOOD_DETAILS_RECEIVED')
  })

  it('getFoodDetailsReceived returns food argument', () => {
    expect(getFoodDetailsReceived(mockFoods).foods).toEqual(mockFoods)
  })

  it('getFoodDetailsReceived async axction works appropriately', (done) => {
    const foodId = 1
    const month = 1
    const getFoodDetailsDispatcher = getFoodDetails(month, foodId)
    const dispatch = jest.fn()
    getFoodDetailsDispatcher(dispatch)
      .then(() => {
        expect(dispatch.mock.calls).toHaveLength(2) // ???
        expect(dispatch.mock.calls[1][0].foods[0].name).toBe('Apple')
        done()
      })
  })
})

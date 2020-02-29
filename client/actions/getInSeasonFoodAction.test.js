import { getInSeasonFoodsRequest, getInSeasonFoodsReceived, getInSeasonFoods } from './getInSeasonFoodsActions'

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

jest.mock('../api/getInSeasonFoods', () => ({
  getInSeasonFoods: (month) => Promise.resolve(mockFoods)
}))

describe('Get In Season Foods action tests', () => {
  it('getInSeasonFoodsRequest returns type of GET_IN_SEASON_FOODS_REQUEST', () => {
    expect(getInSeasonFoodsRequest().type).toBe('GET_IN_SEASON_FOODS_REQUEST')
  })

  it('getInSeasonFoodsReceived returns type of GET_IN_SEASON_FOODS_RECEIVED', () => {
    expect(getInSeasonFoodsReceived().type).toBe('GET_IN_SEASON_FOODS_RECEIVED')
  })

  it('getInSeasonFoodsReceived returns food argument', () => {
    expect(getInSeasonFoodsReceived(mockFoods).foods).toEqual(mockFoods)
  })

  it('getInSeasonFoods async action works appropriately', (done) => {
    const month = 1
    const getInSeasonFoodsDispatcher = getInSeasonFoods(month)
    const dispatch = jest.fn()
    getInSeasonFoodsDispatcher(dispatch)
      .then(() => {
        expect(dispatch.mock.calls).toHaveLength(2)
        expect(dispatch.mock.calls[1][0].foods[0].name).toBe('Apple')
        done()
      })
  })
})

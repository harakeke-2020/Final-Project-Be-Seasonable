import { getInSeasonFoodsPending, getInSeasonFoodsSuccess, getInSeasonFoods } from './getInSeasonFoodsActions'

const mockFoods = [
  {
    id: 1,
    name: 'Apples',
    reoName: 'Āporo',
    price: 3.67,
    image: ''
  },
  {
    id: 2,
    name: 'Pears',
    reoName: 'Pea',
    price: 4.56,
    image: ''
  }
]

jest.mock('../api/getInSeasonFoods', () => ({
  getInSeasonFoods: (month) => Promise.resolve(mockFoods)
}))

describe('Get In Season Foods action tests', () => {
  it('getInSeasonFoodsPending returns type of GET_IN_SEASON_FOODS_PENDING', () => {
    expect(getInSeasonFoodsPending().type).toBe('GET_IN_SEASON_FOODS_PENDING')
  })

  it('getInSeasonFoodsSuccess returns type of GET_IN_SEASON_FOODS_SUCCESS', () => {
    expect(getInSeasonFoodsSuccess().type).toBe('GET_IN_SEASON_FOODS_SUCCESS')
  })

  it('getInSeasonFoodsSuccess returns food argument', () => {
    expect(getInSeasonFoodsSuccess(mockFoods).foods).toEqual(mockFoods)
  })

  it('getInSeasonFoods async action works appropriately', () => {
    const month = 1
    const getInSeasonFoodsDispatcher = getInSeasonFoods(month)
    const dispatch = jest.fn()
    getInSeasonFoodsDispatcher(dispatch)
      .then(() => {
        expect(dispatch.mock.calls).toHaveLength(2)
        expect(dispatch.mock.calls[1][0].foods[0].name).toBe('Apples')
      })
  })
})

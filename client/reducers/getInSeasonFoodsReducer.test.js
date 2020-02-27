import season from './getInSeasonFoodsReducer'

describe('Get in season food reducer tests', () => {
  it('GET_IN_SEASON_FOODS_SUCCESS returns foods', () => {
    const testAction = {
      type: 'GET_IN_SEASON_FOODS_SUCCESS',
      foods: [
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
    }
    expect(season([], testAction)[0].name).toBe('Apples')
  })

  it('Default returns []', () => {
    const testAction = {
      type: 'hi'
    }
    expect(season([], testAction)[0]).toBe(undefined)
  })
})
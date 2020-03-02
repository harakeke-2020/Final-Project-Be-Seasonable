import foodDetails from './getFoodDetailsReducer'

describe('Get food details reducer tests', () => {
  it('GET_FOOD_DETAILS_RECEIVED returns foods', () => {
    const testAction = {
      type: 'GET_FOOD_DETAILS_RECEIVED',
      food:
        {
          id: 104,
          name: 'Apples',
          reoName: 'Āporo',
          month: 7,
          price: 2.43,
          image: '/apples.png',
          nzGrown: 1,
          lastMonth: 9,
          firstMonth: 3,
          details: ''
        }
    }
    expect(foodDetails({}, testAction).name).toBe('Apples')
  })

  it('Default action returns {}', () => {
    const testAction = {
      type: 'oops'
    }
    expect(foodDetails({}, testAction)).toEqual({})
  })
})

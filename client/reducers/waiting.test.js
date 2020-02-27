import waiting from './waiting'

describe('Waiting reducer tests', () => {
  it('GET_IN_SEASON_FOODS_REQUEST returns true', () => {
    const testAction = {
      type: 'GET_IN_SEASON_FOODS_REQUEST'
    }
    expect(waiting(false, testAction)).toBeTruthy()
  })

  it('GET_IN_SEASON_FOODS_RECEIVED returns false', () => {
    const testAction = {
      type: 'GET_IN_SEASON_FOODS_RECEIVED'
    }
    expect(waiting(false, testAction)).toBeFalsy()
  })

  it('Waiting is returned when any other action is passed', () => {
    const testAction = {
      type: 'Hi'
    }
    expect(waiting(false, testAction)).toBeFalsy()
  })
})

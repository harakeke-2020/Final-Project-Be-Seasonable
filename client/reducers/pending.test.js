import pending from './pending'

describe('Pending reducer tests', () => {
  it('GET_IN_SEASON_FOODS_PENDING returns true', () => {
    const testAction = {
      type: 'GET_IN_SEASON_FOODS_PENDING'
    }
    expect(pending(false, testAction)).toBeTruthy()
  })
  
  it('GET_IN_SEASON_FOODS_SUCCESS returns false', () => {
    const testAction = {
      type: 'GET_IN_SEASON_FOODS_SUCCESS'
    }
    expect(pending(false, testAction)).toBeFalsy()
  })

  it('Pending is return when any other action is passed', () => {
    const testAction = {
      type: 'Hi'
    }
    expect(pending(false, testAction)).toBeFalsy()
  })
  
})
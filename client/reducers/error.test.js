import error from './error'

describe('Error reducer tests', () => {
  it('ERROR returns action message', () => {
    const testAction = {
      type: 'ERROR',
      message: 'Test message'
    }
    expect(error(null, testAction)).toBe('Test message')
  })

  it('Default returns null', () => {
    const testAction = {
      type: 'ERRORSSSSS'
    }
    expect(error(null, testAction)).toBe(null)
  })
})

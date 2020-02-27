import error, { showError } from './error'

describe('Error action tests', () => {
  it('showError returns ERROR type', () => {
    expect(showError().type).toBe('ERROR')
  })
})
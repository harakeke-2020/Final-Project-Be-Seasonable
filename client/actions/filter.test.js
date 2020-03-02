import { filterChange, FILTER_CHANGE } from './filter'

describe('filterChange functions properly', () => {
  const filterValue = 'testFilter'
  const action = filterChange(filterValue)

  it('returns correct type of FILTER_CHANGE', () => {
    expect(action.type).toBe(FILTER_CHANGE)
  })

  it('returns right filter value', () => {
    expect(action.filter).toBe(filterValue)
  })
})

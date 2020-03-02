import { getFilteredArray } from './filiterUtils'

describe('getFilteredArray returns things correctly', () => {
  const mockFoods = [
    {
      id: 2,
      name: 'Avocados',
      reoName: 'Awakato',
      month: 2,
      price: 8.26,
      image: '/path',
      nzGrown: 1,
      lastMonth: 7,
      firstMonth: 3,
      details: ' Are good. '
    },
    {
      id: 3,
      name: 'Bananas',
      reoName: 'Panana',
      month: 2,
      price: 2.81,
      image: '/path',
      nzGrown: 1,
      lastMonth: 9,
      firstMonth: 4,
      details: ' Yummy '
    }
  ]
  const month = 7

  it('functions right when filter is all', () => {
    const actual = getFilteredArray(mockFoods, month, 'all')
    expect(actual).toEqual(mockFoods)
  })

  it('functions correctly when filter is locallyGrown', () => {
    const expected = [
      {
        id: 2,
        name: 'Avocados',
        reoName: 'Awakato',
        month: 2,
        price: 8.26,
        image: '/path',
        nzGrown: 1,
        lastMonth: 7,
        firstMonth: 3,
        details: ' Are good. '
      },
      {
        id: 3,
        name: 'Bananas',
        reoName: 'Panana',
        month: 2,
        price: 2.81,
        image: '/path',
        nzGrown: 1,
        lastMonth: 9,
        firstMonth: 4,
        details: ' Yummy '
      }
    ]
    const actual = getFilteredArray(mockFoods, month, 'locallyGrown')
    expect(actual).toEqual(expected)
  })

  it('functions correctly when filter is newSeason', () => {
    const actual = getFilteredArray(mockFoods, month, 'newSeason')
    expect(actual).toEqual([])
  })

  it('functions correectly when filter is endOfSeason', () => {
    const expected = [
      {
        id: 2,
        name: 'Avocados',
        reoName: 'Awakato',
        month: 2,
        price: 8.26,
        image: '/path',
        nzGrown: 1,
        lastMonth: 7,
        firstMonth: 3,
        details: ' Are good. '
      }
    ]
    const actual = getFilteredArray(mockFoods, month, 'endOfSeason')
    expect(actual).toEqual(expected)
  })
})

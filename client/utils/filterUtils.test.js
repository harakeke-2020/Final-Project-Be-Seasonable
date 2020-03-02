import { getQuality } from './filiterUtils'

test('getQuality returns things correctly', () => {
  const mockFood = {
    id: 2,
    name: 'Avocados',
    reoName: 'Awakato',
    month: 2,
    price: 8.26,
    image: '/path',
    nzGrown: true,
    lastMonth: 7,
    firstMonth: 3,
    details: ' Are good. '
  }
  const month = 7
  const expected = {
    locallyGrown: true,
    newSeason: false,
    endOfSeason: true
  }
  const actual = getQuality(mockFood, month)
  expect(actual).toEqual(expected)
})

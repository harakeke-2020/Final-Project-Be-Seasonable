const env = require('../db/testEnvironment')
const db = require('./db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

describe('Foods Database Function tests', () => {
  it('db.getInSeasonFoods /2 should return 15 objects', (done) => {
    const expected = 15

    return db.getInSeasonFoods(2, testDb)
      .then(foods => {
        const actual = foods.length
        expect(actual).toBe(expected)
        done()
      })
  })

  it('db.getInSeasonFoods finds the right month', (done) => {
    const month = 2

    return db.getInSeasonFoods(month, testDb)
      .then(foods => {
        expect(foods[0].month).toBe(month)
        done()
      })
  })
})
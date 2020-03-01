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

describe('Foods Database Function tests', () => {
  it('db.getFoodDetails finds the right id by month', (done) => {
    const month = 3
    const id = 2
    return db.getFoodDetails(month, id, testDb)
      .then(foods => {
        expect(foods[0].id).toBe(id)
        done()
      })
  })

  it('db.getFoodDetails /1 should return an array of 1 object', (done) => {
    const month = 3
    const id = 2
    return db.getFoodDetails(month, id, testDb)
      .then(food => {
        expect(food).toHaveLength(1)
        done()
      })
  })
})

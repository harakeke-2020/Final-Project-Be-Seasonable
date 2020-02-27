const env = require('../db/testEnvironment')
const db = require('./db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

describe('Foods Database Function tests', () => {
  it('db.getInSeasonFoods return details for food as objects, () => {
    const expected = {
      id: 1,
      
    }

    return db.g
  })
})
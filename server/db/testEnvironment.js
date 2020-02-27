const knex = require('knex')

const testConfig = require('./knexfile').test

module.exports = {

  getTestDb: () => knex(testConfig),

  initialise: db =>
    db.migrate.latest()
      .then(() => db.seed.run()),

  cleanup: db => db.destroy()
}

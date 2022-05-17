// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
// Update with your config settings.
const PGDB_PASSWORD = process.env.PGDB_PASSWORD;

module.exports = {
  development: {
    client: 'postgres',
    connection: {
      host: 'localhost',
      database: 'library',
      user: 'postgres',
      password: 'JDparmar@2244'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/db/migrations`
    },
    seeds: {
      directory: `${__dirname}/db/seeds`
    }
  }
};
const {migrate} = require('postgres-migrations')
const {Client} = require('pg')
const path = require('path')

async function runMigrations() {
  const client = new Client({connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/postgres'})

  await migrate(client, path.resolve(__dirname, './migrations'))
}

runMigrations()

process.on('unhandledRejection', err => {
  throw err
});

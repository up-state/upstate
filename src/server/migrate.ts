import { createDb, migrate } from 'postgres-migrations'

const databaseName = 'upstate'

export async function runMigrations() {
  const dbConfig = {
    database: 'postgres',
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
  }

  await createDb(databaseName, {
    ...dbConfig,
    defaultDatabase: 'postgres', // defaults to "postgres"
  })

  // use project absolute urls since we're using .sql migration files and they're not gonna be compiled
  // by tsc and moved into the `dist` folder
  await migrate(dbConfig, 'src/server/migrations')
}

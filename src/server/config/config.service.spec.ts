import { Test, TestingModule } from '@nestjs/testing'
import { Config } from './config.service'

describe('ConfigService', () => {
  it('should read configuration from environment', () => {
    const dbUrl = 'postgresql://postgres:postgres@localhost:5432/postgres'
    const port = '80'
    process.env.DATABASE_URL = dbUrl
    process.env.PORT = port

    const config = new Config()
    expect(config.databaseUrl).toBe(dbUrl)
    expect(config.port).toBe(port)
  })

  it('should throw with meaningful error message when required parameters are missing', () => {
    delete process.env.DATABASE_URL

    expect(() => new Config()).toThrow(/DATABASE_URL/)
  })
})

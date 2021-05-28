import { Injectable } from '@nestjs/common'

@Injectable()
export class Config {
  /**
   * HTTP port the backend will run on
   */
  readonly port: string

  /**
   * Postgres database URL
   *
   * @example postgresql://user:password@host:port/database
   */
  readonly databaseUrl: string

  constructor() {
    this.port = this.requiredEnv('PORT')
    this.databaseUrl = this.requiredEnv('DATABASE_URL')
  }

  private requiredEnv(name: string) {
    const val = process.env[name]
    if (!val) {
      throw new Error(`Required environment variable "${name}" is not set.`)
    }
    return val
  }
}

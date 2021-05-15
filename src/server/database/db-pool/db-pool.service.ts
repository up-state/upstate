import { Injectable, Logger, OnModuleDestroy } from '@nestjs/common'
import { Pool } from 'pg'
import { Config } from '../../config/config.service'

@Injectable()
export class DBPool extends Pool implements OnModuleDestroy {
  private readonly logger = new Logger(DBPool.name)

  constructor(private config: Config) {
    super({ connectionString: config.databaseUrl })
    this.on('error', (err) => this.logger.error(err))
  }

  onModuleDestroy(): Promise<void> {
    return this.end()
  }
}

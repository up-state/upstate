import { Injectable, Logger, OnModuleDestroy } from '@nestjs/common'
import { Pool } from 'pg'

@Injectable()
export class DBPool extends Pool implements OnModuleDestroy {
  private readonly logger = new Logger(DBPool.name)

  constructor() {
    // TODO: inject or use some sort of configuration service
    super({ connectionString: 'postgresql://postgres:postgres@localhost:5432/postgres' })
    this.on('error', (err) => this.logger.error(err))
  }

  onModuleDestroy(): Promise<void> {
    return this.end()
  }
}

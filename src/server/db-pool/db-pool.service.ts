import { Injectable, OnModuleDestroy } from '@nestjs/common'
import { Pool } from 'pg'

@Injectable()
export class DBPool extends Pool implements OnModuleDestroy {
  constructor() {
    // TODO: inject or use some sort of configuration service
    super({connectionString: 'postgresql://postgres:postgres@localhost:5432/postgres'})
    // TODO: Use a proper logger
    this.on('error', err => console.error(err))
  }

  onModuleDestroy(): Promise<void>  {
    return this.end()
  }
}

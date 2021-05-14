import { Controller, Get } from '@nestjs/common'
import * as db from 'zapatos/db'
import { ServerTimeResponse } from '../shared/models'
import { AppService } from './app.service'
import { DBPool } from './db-pool/db-pool.service'



@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly pool: DBPool) {
  }

  @Get('/users')
  users() {
    return db.select('user', db.all).run(this.pool)
  }

  @Get('/api/server-time')
  getServerTime(): ServerTimeResponse {
    return { servertime: new Date().toLocaleString() }
  }
}

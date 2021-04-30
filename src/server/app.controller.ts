import { Controller, Get } from '@nestjs/common'
import { ServerTimeResponse } from '../shared/models'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/server-time')
  getServerTime(): ServerTimeResponse {
    return { servertime: new Date().toLocaleString() }
  }
}

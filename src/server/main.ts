import { INestApplication } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Config } from './config/config.service'

let app: INestApplication

async function bootstrap() {
  app = await NestFactory.create(AppModule)
  const config = app.get(Config)
  await app.listen(config.port, '0.0.0.0')
  console.log(`upstate server running @ ${await app.getUrl()}`)
}

bootstrap()

async function closeGracefully(signal: NodeJS.Signals) {
  console.log(`*^!@4=> Received signal to terminate: ${signal}`)

  await app.close()
  process.exit()
}

process.on('SIGINT', closeGracefully)
process.on('SIGTERM', closeGracefully)

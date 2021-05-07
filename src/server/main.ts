import { INestApplication } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

let app: INestApplication

async function bootstrap() {
  const port = process.env.PORT ?? 4000
  app = await NestFactory.create(AppModule)
  await app.listen(port, '0.0.0.0')
  console.log(`upstate server running @ ${await app.getUrl()}`)
}
bootstrap()

async function closeGracefully(signal: NodeJS.Signals) {
  console.log(`*^!@4=> Received signal to terminate: ${signal}`)

  await app.close()
  // In the future:
  // await db.close()
  process.exit()
}
process.on('SIGINT', closeGracefully)
process.on('SIGTERM', closeGracefully)

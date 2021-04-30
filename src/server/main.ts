import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const port = process.env.PORT ?? 4000
  const app = await NestFactory.create(AppModule)
  await app.listen(port, 'localhost')
  console.log(`API running @ ${await app.getUrl()}`)
}
bootstrap()

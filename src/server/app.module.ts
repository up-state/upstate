import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import path from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DBPool } from './database/db-pool/db-pool.service'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '../../dist/client'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, DBPool],
})
export class AppModule {}

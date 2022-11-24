import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonumentModule } from './monument/monumet.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'monumentos',
      autoLoadEntities: true,
    }),
    MonumentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

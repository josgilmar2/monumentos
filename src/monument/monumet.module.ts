import { Module } from '@nestjs/common';
import { Monument } from './entities/monument.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonumetController } from './controllers/monument.controller';
import { MonumentRepository } from './repository/monument.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Monument, MonumentRepository])],
  providers: [],
  controllers: [MonumetController],
})
export class MonumentModule {}

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Monument } from '../entities/monument.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MonumentRepository } from '../repository/monument.repository';

@Controller('monument')
export class MonumetController {
  constructor(
    @InjectRepository(Monument)
    private readonly monumentRepository: MonumentRepository,
  ) {}

  @Get('/')
  getMonuments() {
    return this.monumentRepository.find();
  }

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() monument: Monument) {
    return this.monumentRepository.save(monument);
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.monumentRepository.findOneById(id);
  }

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: number, @Body() monument: Monument) {
    await this.monumentRepository.update(id, monument);
    return this.monumentRepository.findOneById(id);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: number) {
    return this.monumentRepository.delete(id);
  }
}

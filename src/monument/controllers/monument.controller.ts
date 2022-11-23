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
import { MonumentDto } from '../dto/monument.dto';

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
  create(@Body() monument: MonumentDto) {
    return this.monumentRepository.save(monument);
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.monumentRepository.findOne({ where: { id: id } });
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() monument: MonumentDto) {
    return this.monumentRepository.save({ ...monument, id });
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: number) {
    return this.monumentRepository.findOne({ where: { id: id } });
  }
}

import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
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
  async getMonuments() {
    const monument: Monument[] = await this.monumentRepository.find();
    if (monument.length == 0) {
      throw new BadRequestException('No existe la lista de monumentos');
    }
    return this.monumentRepository.find();
  }

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() monument: Monument) {
    return this.monumentRepository.save(monument);
  }

  @Get('/:id')
  async findOne(@Param('id') id: number): Promise<Monument> {
    const monument: Monument = await this.monumentRepository.findOne({
      where: { id: id },
    });
    if (monument == undefined) {
      throw new NotFoundException(
        'No se ha encontrado el monumento con id: ' + id,
      );
    }
    return monument;
  }

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: number, @Body() monument: Monument) {
    const monumentFind: Monument = await this.monumentRepository.findOne({
      where: { id: id },
    });
    if (monumentFind == undefined) {
      throw new NotFoundException(
        'No se ha encontrado el monumento con id: ' + id,
      );
    } else {
      await this.monumentRepository.update(id, monument);
      return this.monumentRepository.findOne({
        where: { id: id },
      });
    }
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number) {
    const monument: Monument = await this.monumentRepository.findOne({
      where: { id: id },
    });
    if (monument == undefined) {
      throw new NotFoundException(
        'No se ha encontrado el monumento con id: ' + id,
      );
    }
    return this.monumentRepository.delete(monument);
  }
}

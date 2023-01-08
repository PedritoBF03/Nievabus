import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AutobusesService } from './autobuses.service';
import { CreateAutobusDto } from './dto/create-autobus.dto';
import { UpdateAutobusDto } from './dto/update-autobus.dto';

@Controller('autobuses')
export class AutobusesController {
  constructor(private readonly autobusesService: AutobusesService) {}

  @Post()
  async create(@Body() createAutobusDto: CreateAutobusDto) {
    return this.autobusesService.create(createAutobusDto);
  }

  @Get()
  findAll() {
    return this.autobusesService.findAll();
  }

  @Get(':matricula')
  findOne(@Param('matricula') matricula: string) {
    return this.autobusesService.findOne(matricula);
  }

  @Patch(':matricula')
  update(@Param('matricula') matricula: string, @Body() updateAutobusDto: UpdateAutobusDto) {
    return this.autobusesService.update(matricula, updateAutobusDto);
  }

  @Delete(':matricula')
  remove(@Param('matricula') matricula: string) {
    return this.autobusesService.remove(matricula);
  }
}

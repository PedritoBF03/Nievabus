import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AutobusesService } from './autobuses.service';
import { CreateAutobusDto } from './dto/create-autobus.dto';
import { UpdateAutobusDto } from './dto/update-autobus.dto';

@Controller('autobuses')
export class AutobusesController {
  constructor(private readonly autobusesService: AutobusesService) {}

  @Post()
  create(@Body() createAutobusDto: CreateAutobusDto) {
    return this.autobusesService.create(createAutobusDto);
  }

  @Get()
  findAll() {
    return this.autobusesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autobusesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAutobusDto: UpdateAutobusDto) {
    return this.autobusesService.update(+id, updateAutobusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autobusesService.remove(+id);
  }
}

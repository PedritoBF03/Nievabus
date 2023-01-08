import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ViajesService } from './viajes.service';
import { CreateViajeDto } from './dto/create-viaje.dto';
import { UpdateViajeDto } from './dto/update-viaje.dto';

@Controller('viajes')
export class ViajesController {
  constructor(private readonly viajesService: ViajesService) {}

  @Post()
  create(@Body() createViajeDto: CreateViajeDto) {
    return this.viajesService.create(createViajeDto);
  }

  @Get()
  findAll() {
    return this.viajesService.findAll();
  }

  @Get(':referencia')
  findOne(@Param('referencia') referencia: string) {
    return this.viajesService.findOne(referencia);
  }

  @Patch(':referencia')
  update(@Param('referencia') referencia: string, @Body() updateViajeDto: UpdateViajeDto) {
    return this.viajesService.update(referencia, updateViajeDto);
  }

  @Delete(':referencia')
  remove(@Param('referencia') referencia: string) {
    return this.viajesService.remove(referencia);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';

@Controller('empleados')
export class EmpleadosController {
  constructor(private readonly empleadosService: EmpleadosService) {}

  @Post()
  create(@Body() createEmpleadoDto: CreateEmpleadoDto) {
    return this.empleadosService.create(createEmpleadoDto);
  }

  @Get()
  findAll() {
    return this.empleadosService.findAll();
  }

  @Get(':dni')
  findOne(@Param('dni') dni: string) {
    return this.empleadosService.findOne(dni);
  }

  @Patch(':dni')
  update(@Param('dni') dni: string, @Body() updateEmpleadoDto: UpdateEmpleadoDto) {
    return this.empleadosService.update(dni, updateEmpleadoDto);
  }

  @Delete(':dni')
  remove(@Param('dni') dni: string) {
    return this.empleadosService.remove(dni);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clientesService.create(createClienteDto);
  }

  @Get()
  findAll() {
    return this.clientesService.findAll();
  }

  //Prueba dejando de clave primaria a DNI
  @Get(':dni')
  findOne(@Param('dni') dni: string) {
    return this.clientesService.findOne(dni);
  }

  @Patch(':dni')
  update(@Param('dni') dni: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clientesService.update(dni, updateClienteDto);
  }

  @Delete(':dni')
  remove(@Param('dni') dni: string) {
    return this.clientesService.remove(dni);
  }

  //Original
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.clientesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
  //   return this.clientesService.update(+id, updateClienteDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.clientesService.remove(+id);
  // }
}

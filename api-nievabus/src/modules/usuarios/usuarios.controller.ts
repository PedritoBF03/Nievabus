import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('register')
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  //Prueba dejando de clave primaria a DNI
  @Get(':dni')
  findOne(@Param('dni') dni: string) {
    return this.usuariosService.findOne(dni);
  }

  @Patch(':dni')
  update(@Param('id') dni: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(dni, updateUsuarioDto);
  }

  @Delete(':dni')
  remove(@Param('dni') dni: string) {
    return this.usuariosService.remove(dni);
  }

  //Original
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usuariosService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
  //   return this.usuariosService.update(+id, updateUsuarioDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usuariosService.remove(+id);
  // }
}

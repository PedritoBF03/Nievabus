import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { ClientesService } from '../clientes/clientes.service';

@Injectable()
export class UsuariosService {

  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    // Prueba cambiando el create si se elimina la prueba se elimina esta linea
    private readonly clienteService: ClientesService
  ){
    
  }

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      console.log(createUsuarioDto);
      const { dniCliente, ...camposProfile } = createUsuarioDto;
      const usuarios = this.usuarioRepository.create({...camposProfile});
      const cliente = await this.clienteService.findOne(dniCliente);
      usuarios.cliente = cliente;
      await this.usuarioRepository.save(usuarios);
      return usuarios
    } catch(error){
        return new InternalServerErrorException('Error en BD')
    }
    
  }
  
  // async create(createUsuarioDto: CreateUsuarioDto) {
  //   try {
  //     const usuario = this.usuarioRepository.create(createUsuarioDto);
  //     console.log(usuario);
  //     await this.usuarioRepository.save(usuario);
  //     return usuario;

  //   } catch (error) {
  //     console.log(error);
  //     throw new InternalServerErrorException('Ayuda')
  //   }
  // }

  findAll() {
    return this.usuarioRepository.find({});
  }

  //Prueba dejando de clave primaria a DNI
  findOne(dni: string) {
    return this.usuarioRepository.findOne({
      where: 
        { dni: dni}
    });
  }

  update(dni: string, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${dni} usuario`;
  }

  remove(dni: string) {
    return `This action removes a #${dni} usuario`;
  }

  //Original
  // findOne(id: number) {
  //   return this.usuarioRepository.findOne({
  //     where: 
  //       { id: id}
  //   });
  // }

  // update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
  //   return `This action updates a #${id} usuario`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} usuario`;
  // }
}

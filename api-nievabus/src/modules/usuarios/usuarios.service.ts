import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { ClientesService } from '../clientes/clientes.service';

@Injectable()
export class UsuariosService {

  constructor(
    private readonly dataSource: DataSource,
    
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    // Prueba cambiando el create si se elimina la prueba se elimina esta linea
    private readonly clienteService: ClientesService
  ){
    
  }

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      //console.log(createUsuarioDto);
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

  async update(dni: string, updateUsuarioDto: UpdateUsuarioDto) {
    const { ...rest } = updateUsuarioDto;
    const usuario = await this.usuarioRepository.preload({
      dni,
      ...rest
    });

    if(!usuario) throw new NotFoundException(`Usuario no encontrado`);

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.save(usuario);
      await queryRunner.commitTransaction();
      await queryRunner.release();

      return this.findOne(dni);
    }
    catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.handleDBErrors(error);
    }
  }

  async remove(dni: string) {
    const usuario = await this.findOne(dni);
    await this.usuarioRepository.remove(usuario);
  }

  async deleteAllUsuarios() {
    const query = this.usuarioRepository.createQueryBuilder('usuario');
    try {
      return await query
      .delete()
      .where({})
      .execute();
    }
    catch (error) {
      this.handleDBErrors(error);
    }
  }

  private handleDBErrors(error: any): never {
    if (error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    throw new InternalServerErrorException('Please Check Server Error ...');
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

import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { LoginUserDto } from './dto/login.dto.ts';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { ClientesService } from '../clientes/clientes.service';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';


// import { JwtPayload } from './interfaces/jwt-payload.interface';
// import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsuariosService {
  constructor(
    private readonly dataSource: DataSource,
    
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    // Prueba cambiando el create si se elimina la prueba se elimina esta linea
    private readonly clienteService: ClientesService,
    private readonly jwtService: JwtService
  ){
    
  }

  //Create de encriptacion, original y version obsoleta
  /*
  async create(createUsuarioDto: CreateUsuarioDto) {
    try {

      //Copia obsoleta
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


      //Original
      //console.log(createUsuarioDto);
      // const { dniCliente, ...camposProfile } = createUsuarioDto;
      // const usuarios = this.usuarioRepository.create({...camposProfile});
      // const cliente = await this.clienteService.findOne(dniCliente);
      // usuarios.cliente = cliente;
      // await this.usuarioRepository.save(usuarios);
      // return usuarios

      //Encriptacion de contraseña
      const { password, ...userData } = createUsuarioDto;
      const usuarios = this.usuarioRepository.create({
        ...userData,
        password: bcrypt.hashSync( password, 10 )
      });
      await this.usuarioRepository.save(usuarios);
      delete usuarios.password;
      return usuarios;


    } catch(error){
      console.log(error)
        return new InternalServerErrorException('Error en BD')
    }
    
  }
  */
  
  // async login( loginUserDto: LoginUserDto ){
  //   try {
  //     const { email, password } = loginUserDto;
  //     const user = await this.usuarioRepository.findOneBy({ email });
  //     return user;
     
  //   } catch (error) {
  //     this.handleDBErrors(error)
  //   }
  // } 

  //Version definitiva
  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      console.log(createUsuarioDto);
      const { password, ...userData } = createUsuarioDto;
      // const cliente = await this.clientesService.findOne(createUserDto.nif);
      // console.log(cliente);
      const user = this.usuarioRepository.create({
        ...userData,
        password: bcrypt.hashSync( password, 10 )
      });
      // user.cliente = cliente;
      await this.usuarioRepository.save(user);
      // delete user.password;

      return {
        user: { ...user }, 
        token: this.getJwtToken({ email: user.email })
      }

    } catch (error) {
      this.handleDBErrors(error)
    }
  }

  async login( loginUserDto: LoginUserDto ){
    try {
      // buscamos el usuario del email
      const { email, password } = loginUserDto;
      const user = await this.usuarioRepository.findOne({ 
        where: { email },
        select: { email: true, password: true, roles: true, fullName: true }
       });

      if ( !user ) 
        throw new UnauthorizedException ('Credenciales no válidas (email)');

      //comparamos las contraseñas 
      if (!bcrypt.compareSync( password, user.password ))
        throw new UnauthorizedException('Credenciales no válidas (email)')
      
      return {
        user: { ...user }, 
        token: this.getJwtToken({ email: user.email })
      }
      
    } catch (error) {
      //console.log(Error)
      this.handleDBErrors(error)
    }
  }

  private getJwtToken( payload: JwtPayload){
    const token = this.jwtService.sign(payload);
    return token;
  }


  findAll() {
    return this.usuarioRepository.find({});
  }

  //Prueba dejando de clave primaria a DNI
  findOne(id: string) {
    return this.usuarioRepository.findOne({
      where: 
        { id: id}
    });
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const { ...rest } = updateUsuarioDto;
    const usuario = await this.usuarioRepository.preload({
      id,
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

      return this.findOne(id);
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

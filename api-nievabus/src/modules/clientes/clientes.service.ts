import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {

  constructor(
    private readonly dataSource: DataSource,
    
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>
  ){
    
  }

  async create(createClienteDto: CreateClienteDto) {
    try {
      const cliente = this.clienteRepository.create(createClienteDto);
      //console.log(cliente);
      await this.clienteRepository.save(cliente);
      return cliente;

    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda')
    }
  }

  findAll() {
    return this.clienteRepository.find({
      relations: ['usuario']
    });
  }

  //Prueba dejando de clave primaria a DNI
  findOne(dni: string) {
    return this.clienteRepository.findOne({
      where: 
        { dni}
    });
  }

  async update(dni: string, updateClienteDto: UpdateClienteDto) {
    const { ...rest } = updateClienteDto;
    const cliente = await this.clienteRepository.preload({
      dni,
      ...rest
    });

    if(!cliente) throw new NotFoundException(`Cliente no encontrado`);

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.save(cliente);
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
    const cliente = await this.findOne(dni);
    await this.clienteRepository.remove(cliente);
  }

  async deleteAllClientes() {
    const query = this.clienteRepository.createQueryBuilder('cliente');
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
  //   return this.clienteRepository.findOne({
  //     where: 
  //       { id: id}
  //   });
  // }

  // update(id: number, updateClienteDto: UpdateClienteDto) {
  //   return `This action updates a #${id} cliente`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} cliente`;
  // }
}

import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { Empleado } from './entities/empleado.entity';

@Injectable()
export class EmpleadosService {

  constructor(
    private readonly dataSource: DataSource,
    
    @InjectRepository(Empleado)
    private readonly empleadoRepository: Repository<Empleado>
  ){
    
  }

  async create(createEmpleadoDto: CreateEmpleadoDto) {
    try {
      const empleado = this.empleadoRepository.create(createEmpleadoDto);
      console.log(empleado);
      await this.empleadoRepository.save(empleado);
      return empleado;

    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda')
    }
  }

  findAll() {
    return this.empleadoRepository.find({});
  }

  findOne(dni: string) {
    return this.empleadoRepository.findOne({
      where: 
        { dni}
    });
  }

  async update(dni: string, updateEmpleadoDto: UpdateEmpleadoDto) {
    const { ...rest } = updateEmpleadoDto;
    const empleado = await this.empleadoRepository.preload({
      dni,
      ...rest
    });

    if(!empleado) throw new NotFoundException(`Empleado no encontrado`);

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.save(empleado);
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
    const empleado = await this.findOne(dni);
    await this.empleadoRepository.remove(empleado);
  }

  async deleteAllEmpleados() {
    const query = this.empleadoRepository.createQueryBuilder('empleado');
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
}

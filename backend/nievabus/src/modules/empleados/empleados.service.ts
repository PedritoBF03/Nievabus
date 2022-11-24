import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { Empleado } from './entities/empleado.entity';

@Injectable()
export class EmpleadosService {

  constructor(
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

  findOne(id: number) {
    return this.empleadoRepository.findOne({
      where: 
        { id: id}
    });
  }

  update(id: number, updateEmpleadoDto: UpdateEmpleadoDto) {
    return `This action updates a #${id} empleado`;
  }

  remove(id: number) {
    return `This action removes a #${id} empleado`;
  }
}

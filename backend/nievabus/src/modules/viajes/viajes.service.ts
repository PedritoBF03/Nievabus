import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateViajeDto } from './dto/create-viaje.dto';
import { UpdateViajeDto } from './dto/update-viaje.dto';
import { Viaje } from './entities/viaje.entity';

@Injectable()
export class ViajesService {

  constructor(
    @InjectRepository(Viaje)
    private readonly viajeRepository: Repository<Viaje>
  ){
    
  }

  async create(createViajeDto: CreateViajeDto) {
    try {
      const viaje = this.viajeRepository.create(createViajeDto);
      console.log(viaje);
      await this.viajeRepository.save(viaje);
      return viaje;

    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda')
    }
  }

  findAll() {
    return this.viajeRepository.find({});
  }

  findOne(referencia: number) {
    return this.viajeRepository.findOne({
      where: 
        { referencia: referencia}
    });
  }

  update(id: number, updateViajeDto: UpdateViajeDto) {
    return `This action updates a #${id} viaje`;
  }

  remove(id: number) {
    return `This action removes a #${id} viaje`;
  }
}

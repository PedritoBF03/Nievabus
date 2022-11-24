import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAutobusDto } from './dto/create-autobus.dto';
import { UpdateAutobusDto } from './dto/update-autobus.dto';
import { Autobus } from './entities/autobus.entity';

@Injectable()
export class AutobusesService {

  constructor(
    @InjectRepository(Autobus)
    private readonly autobusRepository: Repository<Autobus>
  ){
    
  }

  async create(createAutobusDto: CreateAutobusDto) {
    try {
      const autobus = this.autobusRepository.create(createAutobusDto);
      console.log(autobus);
      await this.autobusRepository.save(autobus);
      return autobus;

    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda')
    }
  }

  findAll() {
    return this.autobusRepository.find({});
  }

  findOne(id: number) {
    return this.autobusRepository.findOne({
      where: 
        { id: id}
    });
  }

  update(id: number, updateAutobusDto: UpdateAutobusDto) {
    return `This action updates a #${id} autobus`;
  }

  remove(id: number) {
    return `This action removes a #${id} autobus`;
  }
}

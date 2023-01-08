import { NotFoundException } from '@nestjs/common';
import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateAutobusDto } from './dto/create-autobus.dto';
import { UpdateAutobusDto } from './dto/update-autobus.dto';
import { Autobus } from './entities/autobus.entity';

@Injectable()
export class AutobusesService {

  constructor(
    private readonly dataSource: DataSource,

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

  findOne(matricula: string) {
    return this.autobusRepository.findOne({
      where: 
        { matricula: matricula}
    });
  }

  async update(matricula: string, updateAutobusDto: UpdateAutobusDto) {
    const { ...rest } = updateAutobusDto;
    const autobus = await this.autobusRepository.preload({
      matricula,
      ...rest
    });

    if(!autobus) throw new NotFoundException(`Autobus no encontrado`);

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.save(autobus);
      await queryRunner.commitTransaction();
      await queryRunner.release();

      return this.findOne(matricula);
    }
    catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.handleDBErrors(error);
    }
  }

  async remove(matricula: string) {
    const autobus = await this.findOne(matricula);
    await this.autobusRepository.remove(autobus);
  }

  async deleteAllAutobuses() {
    const query = this.autobusRepository.createQueryBuilder('autobus');
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

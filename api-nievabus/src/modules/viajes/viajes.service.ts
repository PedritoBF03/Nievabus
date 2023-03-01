import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { AutobusesService } from '../autobuses/autobuses.service';
import { Autobus } from '../autobuses/entities/autobus.entity';
import { ClientesService } from '../clientes/clientes.service';
import { Cliente } from '../clientes/entities/cliente.entity';
import { EmpleadosService } from '../empleados/empleados.service';
import { Empleado } from '../empleados/entities/empleado.entity';
import { CreateViajeDto } from './dto/create-viaje.dto';
import { UpdateViajeDto } from './dto/update-viaje.dto';
import { Viaje } from './entities/viaje.entity';

@Injectable()
export class ViajesService {

  constructor(
    private readonly dataSource: DataSource,
    
    @InjectRepository(Viaje)
    private readonly viajeRepository: Repository<Viaje>,

    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,

    @InjectRepository(Autobus)
    private readonly autobusRepository: Repository<Autobus>,

    @InjectRepository(Empleado)
    private readonly empleadoRepository: Repository<Empleado>,

    private readonly clienteService: ClientesService,
    private readonly autobusService: AutobusesService,
    private readonly empleadoService: EmpleadosService
  ){
    
  }

  async create(createViajeDto: CreateViajeDto) {
    try {
      // const { dniEmpleado, matriculaAutobus, dniCliente, ...camposViajes } = createViajeDto;
      const { dniEmpleado, dniCliente, ...camposViajes } = createViajeDto;
      const viaje = this.viajeRepository.create({
        ...camposViajes,
        //empleado: dniEmpleado.map(emplead => this.empleadoRepository.create({dni: emplead})),
        //cliente: dniCliente.map(client => this.clienteRepository.create({dni: client})),
        // autobus: matriculaAutobus.map(autobu => this.autobusRepository.create({matricula: autobu}))
      });

      await this.viajeRepository.save(viaje);
      return {viaje};
    }
    catch (error) {
      console.log(error);
      return new InternalServerErrorException('Ayuda!')
    }
  }

  findAll() {
    return this.viajeRepository.find({});
  }

  findOne(referencia: string) {
    return this.viajeRepository.findOne({
      where: 
        { referencia}
    });
  }

  async update(referencia: string, updateViajeDto: UpdateViajeDto) {
    const { ...rest } = updateViajeDto;
    const viaje = await this.viajeRepository.preload({
      referencia,
      ...rest
    });

    if(!viaje) throw new NotFoundException(`Viaje no encontrado`);

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.save(viaje);
      await queryRunner.commitTransaction();
      await queryRunner.release();

      return this.findOne(referencia);
    }
    catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.handleDBErrors(error);
    }
  }

  async remove(referencia: string) {
    const viaje = await this.findOne(referencia);
    await this.viajeRepository.remove(viaje);
  }

  async deleteAllViajes() {
    const query = this.viajeRepository.createQueryBuilder('viaje');
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

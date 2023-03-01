import { Module } from '@nestjs/common';
import { ViajesService } from './viajes.service';
import { ViajesController } from './viajes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Viaje } from './entities/viaje.entity';
import { Cliente } from '../clientes/entities/cliente.entity';
import { ClientesModule } from '../clientes/clientes.module';
import { EmpleadosModule } from '../empleados/empleados.module';
import { Autobus } from '../autobuses/entities/autobus.entity';
import { AutobusesModule } from '../autobuses/autobuses.module';
import { Empleado } from '../empleados/entities/empleado.entity';

@Module({
  controllers: [ViajesController],
  providers: [ViajesService],
  imports: [
    ClientesModule,
    EmpleadosModule,
    AutobusesModule,
    TypeOrmModule.forFeature([ Viaje, Autobus, Empleado ])
  ],
  exports: [ViajesService]
})
export class ViajesModule {}

import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ClientesModule } from '../clientes/clientes.module';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { AutobusesModule } from '../autobuses/autobuses.module';
import { EmpleadosModule } from '../empleados/empleados.module';
import { ViajesModule } from '../viajes/viajes.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    ClientesModule,
    UsuariosModule,
    AutobusesModule,
    EmpleadosModule,
    ViajesModule
  ]
})
export class SeedModule {}

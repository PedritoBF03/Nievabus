import { Module } from '@nestjs/common';
import { AutobusesModule } from './modules/autobuses/autobuses.module';
import { EmpleadosModule } from './modules/empleados/empleados.module';
import { ClientesModule } from './modules/clientes/clientes.module';
import { ViajesModule } from './modules/viajes/viajes.module';

@Module({
  imports: [AutobusesModule, EmpleadosModule, ClientesModule, ViajesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ClientesModule } from './modules/clientes/clientes.module';
import { AutobusesModule } from './modules/autobuses/autobuses.module';
import { EmpleadosModule } from './modules/empleados/empleados.module';

@Module({
  imports: [ClientesModule, AutobusesModule, EmpleadosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

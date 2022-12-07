import { Module } from '@nestjs/common';
import { AutobusesModule } from './modules/autobuses/autobuses.module';
import { EmpleadosModule } from './modules/empleados/empleados.module';
import { ClientesModule } from './modules/clientes/clientes.module';
import { ViajesModule } from './modules/viajes/viajes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsuariosModule } from './modules/usuarios/usuarios.module';

//yarn add @nestjs/config
//yarn add @nestjs/config
//yarn add @nestjs/typeorm typeorm pg

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize:true
    }),
    AutobusesModule, 
    EmpleadosModule, 
    ClientesModule, 
    ViajesModule, UsuariosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

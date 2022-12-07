import { Module } from '@nestjs/common';
import { ViajesService } from './viajes.service';
import { ViajesController } from './viajes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Viaje } from './entities/viaje.entity';

@Module({
  controllers: [ViajesController],
  providers: [ViajesService],
  imports: [
    TypeOrmModule.forFeature([ Viaje ])
  ],
  exports: [ViajesService]
})
export class ViajesModule {}

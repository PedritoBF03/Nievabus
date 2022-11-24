import { Module } from '@nestjs/common';
import { AutobusesService } from './autobuses.service';
import { AutobusesController } from './autobuses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autobus } from './entities/autobus.entity';

@Module({
  controllers: [AutobusesController],
  providers: [AutobusesService],
  imports: [
    TypeOrmModule.forFeature([ Autobus ])
  ],
  exports: [AutobusesService]
})
export class AutobusesModule {}

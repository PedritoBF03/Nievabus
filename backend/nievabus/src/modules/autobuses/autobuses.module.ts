import { Module } from '@nestjs/common';
import { AutobusesService } from './autobuses.service';
import { AutobusesController } from './autobuses.controller';

@Module({
  controllers: [AutobusesController],
  providers: [AutobusesService]
})
export class AutobusesModule {}

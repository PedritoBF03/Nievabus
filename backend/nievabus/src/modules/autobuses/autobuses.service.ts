import { Injectable } from '@nestjs/common';
import { CreateAutobusDto } from './dto/create-autobus.dto';
import { UpdateAutobusDto } from './dto/update-autobus.dto';

@Injectable()
export class AutobusesService {
  create(createAutobusDto: CreateAutobusDto) {
    return 'This action adds a new autobus';
  }

  findAll() {
    return `This action returns all autobuses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} autobus`;
  }

  update(id: number, updateAutobusDto: UpdateAutobusDto) {
    return `This action updates a #${id} autobus`;
  }

  remove(id: number) {
    return `This action removes a #${id} autobus`;
  }
}

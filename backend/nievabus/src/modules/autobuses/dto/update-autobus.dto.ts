import { PartialType } from '@nestjs/mapped-types';
import { CreateAutobusDto } from './create-autobus.dto';

export class UpdateAutobusDto extends PartialType(CreateAutobusDto) {}

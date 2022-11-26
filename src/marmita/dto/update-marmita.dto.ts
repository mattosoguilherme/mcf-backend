import { PartialType } from '@nestjs/swagger';
import { CreateMarmitaDto } from './create-marmita.dto';

export class UpdateMarmitaDto extends PartialType(CreateMarmitaDto) {}

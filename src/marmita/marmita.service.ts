import { Injectable } from '@nestjs/common';
import { CreateMarmitaDto } from './dto/create-marmita.dto';
import { UpdateMarmitaDto } from './dto/update-marmita.dto';

@Injectable()
export class MarmitaService {
  create(createMarmitaDto: CreateMarmitaDto) {
    return 'This action adds a new marmita';
  }

  findAll() {
    return `This action returns all marmita`;
  }

  findOne(id: number) {
    return `This action returns a #${id} marmita`;
  }

  update(id: number, updateMarmitaDto: UpdateMarmitaDto) {
    return `This action updates a #${id} marmita`;
  }

  remove(id: number) {
    return `This action removes a #${id} marmita`;
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarmitaService } from './marmita.service';
import { CreateMarmitaDto } from './dto/create-marmita.dto';
import { UpdateMarmitaDto } from './dto/update-marmita.dto';

@Controller('marmita')
export class MarmitaController {
  constructor(private readonly marmitaService: MarmitaService) {}

  @Post()
  create(@Body() createMarmitaDto: CreateMarmitaDto) {
    return this.marmitaService.create(createMarmitaDto);
  }

  @Get()
  findAll() {
    return this.marmitaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marmitaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMarmitaDto: UpdateMarmitaDto) {
    return this.marmitaService.update(+id, updateMarmitaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marmitaService.remove(+id);
  }
}

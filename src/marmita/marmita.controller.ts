import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MarmitaService } from './marmita.service';
import { CreateMarmitaDto } from './dto/create-marmita.dto';
import { UpdateMarmitaDto } from './dto/update-marmita.dto';

import { Role } from 'src/utils/roles.enum';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@ApiTags('marmita')
@Controller('marmita')
export class MarmitaController {
  constructor(private readonly marmitaService: MarmitaService) {}

  @Post()
  @ApiBearerAuth()
  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(AuthGuard(), RolesGuard)
  create(@Body() createMarmitaDto: CreateMarmitaDto) {
    return this.marmitaService.create(createMarmitaDto);
  }

  @Get()
  @ApiBearerAuth()
  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(AuthGuard(), RolesGuard)
  findAll() {
    return this.marmitaService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(AuthGuard(), RolesGuard)
  findOne(@Param('id') id: string) {
    return this.marmitaService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(AuthGuard(), RolesGuard)
  update(@Param('id') id: string, @Body() updateMarmitaDto: UpdateMarmitaDto) {
    return this.marmitaService.update(id, updateMarmitaDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(AuthGuard(), RolesGuard)
  remove(@Param('id') id: string) {
    return this.marmitaService.remove(id);
  }
}

import { Injectable } from '@nestjs/common';
import { Marmita } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateMarmitaDto } from './dto/create-marmita.dto';
import { UpdateMarmitaDto } from './dto/update-marmita.dto';

@Injectable()
export class MarmitaService {
  constructor(private prisma: PrismaService) {}

  async create({
    nome,
    quantidade,
    tipo_encomenda,
  }: CreateMarmitaDto): Promise<Marmita> {
    return await this.prisma.marmita.create({
      data: {
        nome: nome,
        quantidade: quantidade,
        tipo_encomenda: tipo_encomenda,
        status: 'AGUARDANDO',
      },
    });
  }

  async findAll(): Promise<Marmita[]> {
    return await this.prisma.marmita.findMany();
  }

  async findOne(id: string): Promise<Marmita> {
    return await this.prisma.marmita.findUnique({
      where: { id: id },
    });
  }

  async update(
    id: string,
    { nome, quantidade, tipo_encomenda, status }: UpdateMarmitaDto,
  ): Promise<Marmita> {
    return await this.prisma.marmita.update({
      where: { id: id },
      data: {
        nome: nome,
        quantidade: quantidade,
        tipo_encomenda: tipo_encomenda,
        status: status,
      },
    });
  }

  async remove(id: string): Promise<Marmita> {
    return await this.prisma.marmita.delete({
      where: { id: id },
    });
  }
}

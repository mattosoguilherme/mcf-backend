import { ConflictException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { McfService } from 'src/mcf.service';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService, private mcfService: McfService) {}

  async create({
    email,
    senha,
    senha_confirmacao,
  }: CreateUserDto): Promise<User> {
    await this.mcfService.EmailValid(email);

    if (senha !== senha_confirmacao) {
      throw new ConflictException('senhas não conferem');
    }

    return await this.prisma.user.create({
      data: {
        email: email,
        senha: await bcrypt.hash(senha, 10),
      },
    });
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<User> {
    await this.mcfService.findUserById(id);

    return await this.prisma.user.findUnique({
      where: { id: id },
    });
  }

  async update(
    id: string,
    { email, senha, senha_confirmacao, senha_atual }: UpdateUserDto,
  ): Promise<User> {
    await this.mcfService.findUserById(id);

    if (senha_atual) {
      await this.mcfService.compare(senha_atual, id);
      if (senha !== senha_confirmacao) {
        throw new ConflictException('senhas não conferem');
      }
      const hash = await bcrypt.hash(senha, 10);
      
      return await this.prisma.user.update({
        where: { id: id },
        data: {
          email: email,
          senha: hash,
        },
      });
    }

    return await this.prisma.user.update({
      where: { id: id },
      data: {
        email: email,
      },
    });
  }

  async remove(id: string): Promise<User> {
    await this.mcfService.findUserById(id);

    return await this.prisma.user.delete({
      where: { id: id },
    });
  }
}

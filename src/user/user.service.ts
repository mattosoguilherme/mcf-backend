import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create({
    login,
    senha,
    senha_confirmacao,
  }: CreateUserDto): Promise<User> {
    return await this.prisma.user.create({
      data: {
        login: login,
        senha: senha,
      },
    });
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: { id: id },
    });
  }

  async update(
    id: string,
    { login, senha, senha_confirmacao }: UpdateUserDto,
  ): Promise<User> {
    return await this.prisma.user.update({
      where: { id: id },
      data: {
        login: login,
        senha: senha,
      },
    });
  }

  async remove(id: string): Promise<User> {
    return await this.prisma.user.delete({
      where: { id: id },
    });
  }
}

import { ConflictException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from './prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class McfService {
    constructor(private prisma:PrismaService){}

    
  async EmailValid(email: string): Promise<User> {

    const email_finded = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (email_finded) {
      throw new ConflictException('Email já cadastrado');
    }

    return email_finded;
  }

  async findUserById(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id: id },
    });

    if (!user) {
      throw new ConflictException('Usuário encontrado');
    }

    return user;
  }

  async findUserByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id: email },
    });

    if (!user) {
      throw new ConflictException('email não cadastrado');
    }

    return user;
  }

  async compare(senha: string, id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: id },
    });

    const hash_valided = await bcrypt.compare(senha, user.senha);

    if (!hash_valided) {
      throw new ConflictException('Senha atual está incorreta.');
    }

  }




}

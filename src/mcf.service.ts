import { ConflictException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from './prisma.service';

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





}

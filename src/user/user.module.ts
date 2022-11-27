import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma.service';
import { McfService } from 'src/mcf.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService,McfService],
})
export class UserModule {}

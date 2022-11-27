import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma.service';
import { McfService } from 'src/mcf.service';
import { PassportModule } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Module({
  imports:[PassportModule.register({defaultStrategy: 'jwt'})],
  controllers: [UserController],
  providers: [UserService, PrismaService,McfService, RolesGuard],
})
export class UserModule {}

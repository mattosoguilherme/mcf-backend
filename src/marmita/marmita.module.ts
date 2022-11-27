import { Module } from '@nestjs/common';
import { MarmitaService } from './marmita.service';
import { MarmitaController } from './marmita.controller';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from 'src/prisma.service';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { McfService } from 'src/mcf.service';

@Module({
  imports:[PassportModule.register({defaultStrategy: 'jwt'})],
  controllers: [MarmitaController],
  providers: [MarmitaService,PrismaService,RolesGuard, McfService]
})
export class MarmitaModule {}

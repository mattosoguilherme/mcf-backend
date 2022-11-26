import { Module } from '@nestjs/common';
import { MarmitaService } from './marmita.service';
import { MarmitaController } from './marmita.controller';

@Module({
  controllers: [MarmitaController],
  providers: [MarmitaService]
})
export class MarmitaModule {}

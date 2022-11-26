import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MarmitaModule } from './marmita/marmita.module';

@Module({
  imports: [UserModule, MarmitaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

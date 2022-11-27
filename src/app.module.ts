import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MarmitaModule } from './marmita/marmita.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [UserModule, MarmitaModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

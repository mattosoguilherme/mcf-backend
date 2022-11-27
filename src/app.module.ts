import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MarmitaModule } from './marmita/marmita.module';
import { AuthModule } from './auth/auth.module';
import { McfService } from './mcf/mcf.service';

@Module({
  imports: [UserModule, MarmitaModule, AuthModule],
  controllers: [],
  providers: [McfService],
})
export class AppModule {}

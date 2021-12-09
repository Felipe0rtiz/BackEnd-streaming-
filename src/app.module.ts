import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { FilmeModule } from './filme/filme.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, FilmeModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

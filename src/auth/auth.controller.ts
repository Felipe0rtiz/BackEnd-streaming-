import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CrendentialsDto } from './dto/credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() dados: CrendentialsDto) {
    return this.authService.login(dados);
  }
}
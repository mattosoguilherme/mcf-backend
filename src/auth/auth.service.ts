import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { McfService } from 'src/mcf.service';
import { LoginInputDto } from './dto/loginInput.dto';
import * as bcrypt from 'bcrypt';
import { LoginResponseDto } from './dto/loginResponse.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private mcfService: McfService) {}
  async login({ email, senha }: LoginInputDto): Promise<LoginResponseDto> {
    const FindedUser = await this.mcfService.findUserByEmail(email);

    const senha_valida = await bcrypt.compare(senha, FindedUser.senha);

    if (!senha_valida) {
      throw new UnauthorizedException('Email ou senha inválidos.');
    }

    delete FindedUser.senha;

    return {
      token: this.jwtService.sign({ email }),
      user: FindedUser,
    };
  }
}

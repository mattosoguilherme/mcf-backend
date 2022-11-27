import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Length, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Campo login deve ser obrigatoriamente uma string' })
  @ApiProperty({
    default: 'guilherme@mcf.com',
    description: 'Este campo dever ser preenchido com nome completo',
  })
  @IsNotEmpty({ message: 'Campo nome é obrigatório' })
  @IsEmail()
  email: string;

  @IsString({ message: 'Campo senha deve ser obrigatoriamente uma string' })
  @ApiProperty({
    default: '1234',
    description: 'Senha para ser utilizada para entrar no sistema',
  })
  @IsNotEmpty({ message: 'Campo nome é obrigatório' })
  @Length(4, 4)
  senha: string;

  @IsString({ message: 'Campo senha deve ser obrigatoriamente uma string' })
  @ApiProperty({
    default: '1234',
    description:
      'Senha de confirmação para autenticar senha a ser utilizada para entrar no sistema',
  })
  @IsNotEmpty({ message: 'Campo nome é obrigatório' })
  @Length(4, 4)
  senha_confirmacao: string;
}

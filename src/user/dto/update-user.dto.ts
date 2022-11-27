import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  @ApiProperty({
    default: '4321',
  })
  senha_confirmacao?: string;

  @IsOptional()
  @ApiProperty({
    default: '4321',
  })
  senha?: string;
  
  @IsOptional()
  email?: string;

  @IsString()
  @ApiProperty({
    default: '1234',
    description: 'Senha cadastrada anteriormente pelo usuário',
  })
  @IsOptional()
  @Length(4, 4)
  senha_atual: string;
}

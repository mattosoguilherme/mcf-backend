import { PartialType } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  senha_confirmacao?: string;
  @IsOptional()
  senha?: string;
  @IsOptional()
  email?: string;
}

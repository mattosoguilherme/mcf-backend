import { PartialType } from '@nestjs/swagger';
import { LoginInputDto } from './loginInput.dto';

export class UpdateAuthDto extends PartialType(LoginInputDto) {}

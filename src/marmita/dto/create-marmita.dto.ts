import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMarmitaDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    default:"Guilherme"
  })
  nome: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    default:4
  })
  quantidade: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    default:"ENTREGA"
  })
  tipo_encomenda: string;
}

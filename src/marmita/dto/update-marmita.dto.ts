import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CreateMarmitaDto } from './create-marmita.dto';

export class UpdateMarmitaDto extends PartialType(CreateMarmitaDto) {
   
    @IsOptional()
    tipo_encomenda?: string;

    @IsOptional()
    quantidade?: number;

    @IsOptional()
    nome?: string;

    @IsOptional()
    @IsString()
    @ApiProperty({
        default:"ENTREGUE"
    })
    status:string;

}

import { ApiProperty } from "@nestjs/swagger";
import { MinLength, IsEmail, IsNotEmpty, IsString } from "class-validator";


export class LoginInputDto{
    
    @ApiProperty()

    @IsString()
    @IsNotEmpty()
    login:string;
    
    @IsNotEmpty()
    @ApiProperty()
    @IsString()
    @MinLength(6)
    password:string;
}

import { IsNumber, IsPositive, IsString, MaxLength, MinLength } from "class-validator";


export class CreateClienteDto {
    // @IsNumber()
    // @IsPositive()
    // id: number;

    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    @MaxLength(9)
    dni: string;

    @IsString()
    @MaxLength(9)
    telefono: string;


}

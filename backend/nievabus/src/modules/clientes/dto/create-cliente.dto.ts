import { IsEmail, IsNumber, IsPositive, IsString, MaxLength, MinLength } from "class-validator";


export class CreateClienteDto {
    // @IsNumber()
    // @IsPositive()
    // id: number;

    @IsString()
    dni: string;

    @IsString()
    name: string;

    @IsString()
    @MaxLength(9)
    telefono: string;

    @IsString()
    direccion: string;

}

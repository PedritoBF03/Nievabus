import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUsuarioDto {

    //Añadidio para prueba de DNI como clave primaria
    @IsString()
    dni: string;

    @IsString()
    username: string;

    @IsEmail()
    email: string;

    @IsString()
    instagram: string;

    @IsString()
    facebook: string;

    @IsString()
    @MaxLength(9)
    twitter: string;

    @IsString()
    dniCliente: string;

}


 


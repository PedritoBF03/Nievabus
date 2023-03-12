import { IsEmail, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUsuarioDto {

    //Añadidio para prueba de DNI como clave primaria
    // @IsString()
    // @IsOptional()
    // dni: string;

    @IsString()
    fullName: string;

    // @IsString()
    // @IsOptional()
    // username: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    password: string;

    // @IsString()
    // instagram: string;

    // @IsString()
    // facebook: string;

    // @IsString()
    // @MaxLength(9)
    // twitter: string;

    @IsString()
    @IsOptional()
    dniCliente: string;

}


 


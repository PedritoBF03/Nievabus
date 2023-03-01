import { IsEmail, IsString, MaxLength } from "class-validator";

export class CreateEmpleadoDto {

    @IsString()
    @MaxLength(9)
    dni: string;
    
    @IsString()
    nombre: string;

    @IsString()
    apellidos: string;

    @IsEmail()
    email: string;

    @IsString()
    fecha_nacimiento: string;

    @IsString()
    @MaxLength(9)
    telefono: string;

}

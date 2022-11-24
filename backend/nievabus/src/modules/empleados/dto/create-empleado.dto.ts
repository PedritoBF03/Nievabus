import { IsString, MaxLength } from "class-validator";

export class CreateEmpleadoDto {

    @IsString()
    nombre: string;

    @IsString()
    apellidos: string;

    @IsString()
    @MaxLength(9)
    dni: string;

    @IsString()
    fecha_nacimiento: string;

    @IsString()
    @MaxLength(9)
    telefono: string;

}

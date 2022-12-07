import { IsEmail, IsIn, IsString, MaxLength } from "class-validator";

export class CreateViajeDto {

    @IsString()
    origen: string;

    @IsString()
    destino: string;

    @IsString()
    hora_inicio: string;

    @IsString()
    @IsIn(['si','no'])
    ida_vuelta: string;

    @IsString()
    @MaxLength(8)
    matricula_autobus: string;

    @IsString()
    @MaxLength(9)
    dni_cliente: string;

    @IsString()
    @MaxLength(9)
    dni_empleado: string;

}

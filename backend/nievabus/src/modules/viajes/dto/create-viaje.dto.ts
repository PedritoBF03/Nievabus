import { IsEmail, IsIn, IsString, MaxLength } from "class-validator";

export class CreateViajeDto {

    @IsString()
    referencia: string;
    
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
    matriculaAutobus: string[];

    @IsString()
    dniCliente: string[];

    @IsString()
    dniEmpleado: string[];

}

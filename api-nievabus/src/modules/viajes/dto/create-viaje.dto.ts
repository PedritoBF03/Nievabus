import { IsEmail, IsIn, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateViajeDto {

    @IsString()
    referencia: string;

    @IsString()
    descripcion: string;
    
    @IsString()
    origen: string;

    @IsString()
    destino: string;

    @IsString()
    hora_inicio: string;

    @IsString()
    precio: string;

    @IsString()
    @IsIn(['si','no'])
    ida_vuelta: string;

    @IsString()
    @IsOptional()
    imagen?: string;

    // @IsString()
    // matriculaAutobus: string[];

    @IsString()
    dniCliente: string[];

    @IsString()
    dniEmpleado: string[];

}

import { IsOptional, IsString, MaxLength } from "class-validator";


export class CreateAutobusDto {

    @IsString()
    matricula: string;

    @IsString()
    carroceria: string;

    @IsString()
    motor: string;

    @IsString()
    @MaxLength(9)
    plazas: string;

    @IsString()
    @IsOptional()
    imagen?: string;


}

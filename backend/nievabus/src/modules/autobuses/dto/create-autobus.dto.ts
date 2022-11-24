import { IsString, MaxLength } from "class-validator";


export class CreateAutobusDto {

    @IsString()
    marca: string;

    @IsString()
    modelo: string;

    @IsString()
    @MaxLength(9)
    plazas: string;


}

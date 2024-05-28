
import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";
import { GeneroEnum } from "src/genero.enum";

export class AutorDtos {

    @IsUUID()
    @IsOptional()
    id: string;

    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsDateString()
    @IsOptional()
    dataNascimento: Date;

    @IsEnum(GeneroEnum)
    @IsOptional()
    genero: GeneroEnum;
}
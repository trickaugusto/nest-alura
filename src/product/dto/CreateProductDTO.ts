import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
  MaxLength,
  min,
  MinLength,
  ValidateNested,
} from 'class-validator';

// https://github.com/typestack/class-validator#validation-decorators
export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  valor: string;

  @IsNumber()
  quantidade: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  descricao: string;

  @ValidateNested()
  @ArrayMinSize(3)
  @Type(() => CaracteristicaProdutoDTO)
  caracteristicas: CaracteristicaProdutoDTO[];

  @ArrayMinSize(3)
  imagens: ImagemProdutoDTO[];

  @IsNotEmpty()
  categoria: string;
}

class CaracteristicaProdutoDTO {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;
}

class ImagemProdutoDTO {
  @IsUrl()
  url: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;
}

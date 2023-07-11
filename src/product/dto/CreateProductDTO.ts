import { Type } from 'class-transformer';
import {
  IsArray,
  IsDecimal,
  IsNotEmpty,
  IsPositive,
  ValidateNested,
} from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty()
  nome: string;

  @IsPositive({ message: 'O valor deve ser positivo' })
  @IsDecimal({ decimal_digits: '2' })
  valor: string;
  quantidade: number;
  descricao: string;

  @ValidateNested()
  @IsArray()
  @Type(() => CaracteristicaProdutoDTO)
  caracteristicas: CaracteristicaProdutoDTO[];
  imagens: ImagemProdutoDTO[];
  categoria: string;
}

class CaracteristicaProdutoDTO {
  nome: string;
  descricao: string;
}

class ImagemProdutoDTO {
  url: string;
  descricao: string;
}

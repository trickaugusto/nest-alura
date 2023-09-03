import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { emailIsUnique } from '../validators/unique-email.validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  @emailIsUnique({ message: 'Usuario already exists' })
  email: string;

  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  senha: string;
}

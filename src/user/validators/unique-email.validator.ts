import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UserRepository } from "../user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class UniqueEmail implements ValidatorConstraintInterface {

    constructor(private userRepository: UserRepository) {}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const userAlreadyExist = await this.userRepository.validateUserByEmail(value);
    
        return !userAlreadyExist;
    }
}

export const emailIsUnique = (optionValidations: ValidationOptions) => {
    return (obj: Object, property: string) => {
        registerDecorator({
            target: obj.constructor,
            propertyName: property,
            options: optionValidations,
            constraints: [],
            validator: UniqueEmail
        });
    }
}
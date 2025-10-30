import { IsNotEmpty, isString, MinLength } from "class-validator";

export class CreateEmployeeDTO {
    @IsNotEmpty()
    @MinLength(3)
    name: string;
}
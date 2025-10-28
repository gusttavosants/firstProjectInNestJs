import { IsNotEmpty, IsString } from "class-validator";


export class CreateCustomersDTO {

    @IsString()
    @IsNotEmpty()
    name:string;
}
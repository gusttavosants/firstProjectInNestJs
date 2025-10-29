import { isEmail, IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";


export class CreateCustomersDTO {
    @MinLength(3)
    @IsString()
    @IsNotEmpty()
    nome:string
    
    
    @IsEmail()
    email:string
    
    
    
}
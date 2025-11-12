import { Body, Controller, Delete, Get, Post, Put,Param } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomersDTO } from './dto/create-customers.dto';
import { CreateUpdateDTO } from './dto/create-update.dto';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersRepository:CustomersService){}

        @Get('/findall')
            findAll():any{
                return this.customersRepository.findall()
            }
        
        @Get('/findall/:id')
        findOne(@Param('id')id:number){
            return this.customersRepository.findOne(id);
            }    
        @Post('/add')
            create(@Body()customerBody:CreateCustomersDTO){
                return this.customersRepository.create(customerBody)
            }
            
        @Delete('/:id')
            remove(@Param('id')id:number,){
                return this.customersRepository.remove(id)
            }

        @Put('/update/:id')
            update(@Body()updateBody:CreateUpdateDTO, @Param('id')id:number){
                return this.customersRepository.update(id,updateBody)
            }      
}
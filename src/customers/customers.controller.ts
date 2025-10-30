import { Body, Controller, Delete, Get, Post, Put,Param } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomersDTO } from './dto/create-customers.dto';
import { CreateUpdateDTO } from './dto/create-update.dto';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService:CustomersService){}

        @Get('/findall')
            findAll():string{
                return this.customersService.findAll()
            }

        @Post('/add')
            create(@Body()customerBody:CreateCustomersDTO){
                return this.customersService.create(customerBody)
            }
            
        @Delete('/:id')
            remove(@Param('id')id:number,){
                return this.customersService.remove(id)
            }

        @Put('/update/:id')
            update(@Body()updateBody:CreateUpdateDTO, @Param('id')id:number){
                return this.customersService.update(id,updateBody)
            }      
}
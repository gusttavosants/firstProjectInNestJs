import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService:CustomersService){}

        @Get('/customers')
            findAll():string{
                return 
            }

        @Post('/customers')
            create()


        @Put('/customers/:id')



        @Delete('/customers/:id')
            remove()
}
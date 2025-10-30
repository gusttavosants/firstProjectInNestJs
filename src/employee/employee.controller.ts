import { Body, Controller, Delete, Get, Post, Put,Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly EmployeeService:EmployeeService) {}
    @Get('/findall')
                findAll():string{
                    return this.EmployeeService.findAll()
                }
    
            @Post('/add')
                create(@Body()customerBody:CreateCustomersDTO){
                    return this.EmployeeService.create(customerBody)
                }
                
            @Delete('/:id')
                remove(@Param('id')id:number,){
                    return this.EmployeeService.remove(id)
                }
    
            @Put('/update/:id')
                update(@Body()updateBody:CreateUpdateDTO, @Param('id')id:number){
                    return this.EmployeeService.update(id,updateBody)
                }      
    }
}

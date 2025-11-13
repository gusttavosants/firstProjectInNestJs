import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDTO } from './dto/create-employee.dto';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService){}
        @Get('/findall')
            findAll():any{
            return this.employeeService.findAll();
        }

        @Get('/findall/:id')
            findOne(@Param('id')id:number){
            return this.employeeService.findOne(id);
        }

        @Post('/add')
            create(@Body() CreateEmployeeDTO:CreateEmployeeDTO){
            return this.employeeService.create(CreateEmployeeDTO);
        }

        @Delete('/:id')
            remove(@Param('id')id:number,){
            return this.employeeService.remove(id)
        }

        @Put('/update/:id')
            update(@Body()updateBody:CreateEmployeeDTO, @Param('id')id:number){
            return this.employeeService.update(id,updateBody)
    }
}

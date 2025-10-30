import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
    private employee;
    constructor(){
        this.employee = [{
            "id":0,
            "name":"Jake Mark"
        },
         {   
            "id":1,
            "name":"Mary Jane"
        }];
}
    findAll(){
        return this.employee
    }

    create(){
        
    }



}

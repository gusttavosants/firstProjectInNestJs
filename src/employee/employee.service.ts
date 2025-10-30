import { Injectable } from '@nestjs/common';
import { CreateEmployeeDTO } from './dto/create-employee.dto';

@Injectable()
export class EmployeeService {
    private employee;
    constructor(){
        this.employee = [{
            "id":0,
            "name":"John Robinson"
        },
        {
            "id":1,
            "name":"Will Robinson"
        }]
    }

    findAll(){
        return this.employee
    }


    findOne(id:number){
        const nomeEncontrado = this.employee.find(pessoa => pessoa.id == id)
        return  nomeEncontrado
        
    }

    create(employee:CreateEmployeeDTO){
        const last_id:number = this.employee[this.employee.length - 1].id


        
        const newEmployee = {
            "id" : last_id + 1,
            ...employee
        }
        this.employee.push(newEmployee);
        return {
            "message":"Nome Adicionado"
        }
    }

    remove(id:number){
        this.employee = this.employee.filter((employee)=> employee.id != id)
        return {
            "message": "Nome deletado",
            
        }
    }

    update(id:number,updateBody:CreateEmployeeDTO){
        const targetId = Number(id);
        const findIndex = this.employee.findIndex((employee) => employee.id === targetId)

            if (findIndex == -1){
                
                    throw new Error('Nome nao encontrado')
                
            }

            const updatedEmployee = {
                "id" : targetId,
                ...updateBody
            }

            this.employee[findIndex] = updatedEmployee;

            this.employee  = this.employee.toSpliced(findIndex,1,updatedEmployee)
        return {
            "message":"a lista foi atualizada",
            "lista": this.employee
        }
    }
    }
 

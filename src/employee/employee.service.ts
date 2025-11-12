import { Injectable } from '@nestjs/common';
import { CreateEmployeeDTO } from './dto/create-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService { 
    constructor(@InjectRepository(Employee)
        private customersRepository:Repository <Employee>){}

        findall(): Promise<Employee[]> {
            return this.customersRepository.find();
        } 

        findOne(id: number): Promise<Employee | null>{
            return this.customersRepository.findOneBy({id});
        }

        async remove(id:number): Promise<void>{
            await this.customersRepository.delete(id);
        }

       async create(customer:CreateEmployeeDTO): Promise<Employee>{
            const newCustomer = this.customersRepository.create(customer);
             await this.customersRepository.save(newCustomer);
             return { 'message':'Funcionario criado com sucesso' } as any;
        }
        update(id:number, updateBody:CreateEmployeeDTO): Promise<Employee | null>{
            return this.customersRepository.update(id, updateBody).then(() => {
                return this.customersRepository.findOneBy({id});
        });
    }
}

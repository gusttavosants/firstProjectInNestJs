import { Body, Injectable } from '@nestjs/common';
import { CreateCustomersDTO } from './dto/create-customers.dto';
import { CreateUpdateDTO } from './dto/create-update.dto';
import { find } from 'rxjs';

@Injectable()
export class CustomersService {
    private customers;
    constructor(){
        this.customers = [{
            "id":0,
            "email": "sadsada@gmail.com",
            "nome":"ze"
        },
        {
            "id":1,
            "email": "dsadsaee@gamil.com",
            "nome":"zeluiz"
        },
        {
            "id":2,
            "email": "gasnbdsw@gmail.com",
            "nome":"zejao"
        },
    ]
    }
    findAll(){
        return this.customers
    }
    create(customer:CreateCustomersDTO){
        const last_id:number = this.customers[this.customers.length - 1].id


        
        const newCustomer = {
            "id" : last_id + 1,
            ...customer
        }
        this.customers.push(newCustomer);
        return {
            "message":"Nome e Email Criado"
        }
    }
    remove(id:number){
        this.customers = this.customers.filter((customer)=> customer.id != id)


        return {
            "message": "customer deleted",
            "customer": this.customers
        }
    }

    update(id:number,updateBody:CreateUpdateDTO){
        const targetId = Number(id);
        const findIndex = this.customers.findIndex((customers) => customers.id === targetId)

            if (findIndex == -1){
                return{
                    "message" : "cliente nao encontrado"
                }
            }
        const arrayAtt = {
            "id" : targetId,
            ...updateBody
        } 

        this.customers  = this.customers.toSpliced(findIndex,1,arrayAtt)
        return {
            "message":"a lista foi atualizada",
            "lista": this.customers
        }
    }
}   

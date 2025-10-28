import { Injectable } from '@nestjs/common';
import { CreateCustomersDTO } from './dto/create-customers.dto';

@Injectable()
export class CustomersService {
    private customers;

    constructor(){
        this.customers = [{
            "id":1,
            "customer": "Jason"
        },
        {
            "id":2,
            "customer": "Late"
        },
        {
            "id":3,
            "customer": "Little"
        },
    ]
    }


    findAll(){
        return this.customers
    }

    create(customer:CreateCustomersDTO){
        const last_id:number = this.customers[this.customers.length - 1].id
        const newCustomer = {
            "id"
        }
    }

    remove(id:number){
        this.customers = this.customers.filter((customer)=> customer.id != id)


        return {
            "message": "customer deleted",
            "customer": this.customers
        }
    }
}   

import { Body, Injectable } from '@nestjs/common';
import { CreateCustomersDTO } from './dto/create-customers.dto';
import { CreateUpdateDTO } from './dto/create-update.dto';
import { NotFoundError } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Customers } from './customers.entity';
import { Repository } from 'typeorm';


@Injectable()
export class CustomersService {
    constructor(@InjectRepository(Customers)
private customersRepository:Repository <Customers>){}

    findall(): Promise<Customers[]> {
        return this.customersRepository.find();
    } 

    findOne(id: number): Promise<Customers | null>{
        return this.customersRepository.findOneBy({id});
    }

    async remove(id:number): Promise<void>{
        await this.customersRepository.delete(id);
    }

    async create(customer:CreateCustomersDTO): Promise<Customers>{
        const newCustomer = this.customersRepository.create(customer);
        await this.customersRepository.save(newCustomer);

        return { 'message':'Cliente criado com sucesso' } as any;
    }
    update(id:number, updateBody:CreateUpdateDTO): Promise<Customers | null>{
        return this.customersRepository.update(id, updateBody).then(() => {
            return this.customersRepository.findOneBy({id});
        });
    }
}













//         this.customers = [{
//             "id":0,
//             "email": "sadsada@gmail.com",
//             "nome":"ze"
//         },
//         {
//             "id":1,
//             "email": "dsadsaee@gamil.com",
//             "nome":"zeluiz"
//         },
//         {
//             "id":2,
//             "email": "gasnbdsw@gmail.com",
//             "nome":"zejao"
//         },
//     ]
//     }
//     findAll(){
//         return this.customers
//     }
//     create(customer:CreateCustomersDTO){
//         const last_id:number = this.customers[this.customers.length - 1].id


        
//         const newCustomer = {
//             "id" : last_id + 1,
//             ...customer
//         }
//         this.customers.push(newCustomer);
//         return {
//             "message":"Nome e Email Criado"
//         }
//     }
//     remove(id:number){
//         this.customers = this.customers.filter((customer)=> customer.id != id)


//         return {
//             "message": "customer deleted",
//             "customer": this.customers
//         }
//     }

//     update(id:number,updateBody:CreateUpdateDTO){
//         const targetId = Number(id);
//         const findIndex = this.customers.findIndex((customers) => customers.id === targetId)

//             if (findIndex == -1){
                
//                     throw new NotFoundError("Customer not found")
                
//             }
//         const arrayAtt = {
//             "id" : targetId,
//             ...updateBody
//         } 

//         this.customers  = this.customers.toSpliced(findIndex,1,arrayAtt)
//         return {
//             "message":"a lista foi atualizada",
//             "lista": this.customers
//         }
//     }
// }   

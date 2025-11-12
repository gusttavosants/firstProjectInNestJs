import { Injectable, NotFoundException } from '@nestjs/common';
import { UpsertProductDTO } from './dto/upsert-products.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './products.entity';

@Injectable()
export class ProductsService {
    
    constructor(@InjectRepository(Product) 
    private productsRepository:Repository<Product>) {}
    

    findall(): Promise <Product[]>  {
        return this.productsRepository.find();
    }

    findOne(id:number): Promise <Product | null> {
        return this.productsRepository.findOneBy({id});
    }

    async remove(id:number): Promise<void>{
        await this.productsRepository.delete(id);
    }

    create(customer:UpsertProductDTO): Promise<Product>{
        const newCustomer = this.productsRepository.create(customer);
        return this.productsRepository.save(newCustomer);
    }
    update(id:number, updateBody:UpsertProductDTO): Promise<Product | null>{
        return this.productsRepository.update(id, updateBody).then(() => {
        return this.productsRepository.findOneBy({id});
            });
    }


}
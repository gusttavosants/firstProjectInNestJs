import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../../products/entity/products.entity";
import { Sale } from "./sale.entity";



@Entity('saleProduct')
export class saleProduct {
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(type => Product, product => product.saleproduct)
    product:Product[]

    @ManyToOne(type => Sale, sale => sale.saleproduct)
    sale:Sale[]
}
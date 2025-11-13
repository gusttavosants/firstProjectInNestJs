import { saleProduct } from "src/sale/entity/saleProduct.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('products')
export class Product{
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column('decimal', {precision: 10, scale: 2})
        price: number;
    
    @OneToMany(type => saleProduct, saleproduct => saleproduct.product)
    saleproduct: saleProduct[]
}
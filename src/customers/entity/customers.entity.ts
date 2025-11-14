import { Sale } from "../../sale/entity/sale.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity("customers")
export class Customers {
    @PrimaryGeneratedColumn()
        id: number;
 
    @Column()
        nome: string;
 
    @Column()
        idade: number;

    @Column()
        email: string;

     @OneToMany(type => Sale, sale => sale.customers)
        sale: Sale[]
    
}
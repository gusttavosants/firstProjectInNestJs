import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { saleProduct } from "./saleProduct.entity";
import { Customers } from "../../customers/entity/customers.entity";
import { Employee } from "../../employee/entity/employee.entity";


@Entity('sale')
export class Sale {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    data:Date

    @ManyToOne(type => Customers, customers =>customers.sale)
    customers: Customers[]

    @ManyToOne(type => Employee, employee=>employee.sale )
    employee: Employee[]

    @OneToMany(type => saleProduct, saleproduct=>saleproduct.sale)
    saleproduct: saleProduct[]
}
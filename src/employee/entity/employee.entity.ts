import { Sale } from "../../sale/entity/sale.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('employee')

export class Employee{
    @PrimaryGeneratedColumn()
        id:number;

    @Column()
        name:string;

    @Column()
        turno:string;

    @Column()
        matricula:number;
    
    @OneToMany(type=> Sale, sale=>sale.employee)
        sale:Sale[]
}

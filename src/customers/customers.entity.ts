import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



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

    @Column()
        cpf:number;
}
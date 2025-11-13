import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('employee')

export class Employee{
    @PrimaryGeneratedColumn()
        id:number;

    @Column()
        name:string;

    @Column()
        idade:number;

    @Column()
        turno:string;

    @Column()
        matricula:number;
}

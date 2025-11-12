import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
    
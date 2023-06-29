import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'user'})
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 45})
    username: string;

    @Column({type: "varchar", length: 45})
    mail: string;

    @Column()
    password: string;

    @Column({type: "varchar", length: 15, nullable: true})
    phone_number: string;

    @Column({type: "varchar", length: 45, nullable: true})
    first_name: string;

    @Column({type: "varchar", length: 45, nullable: true})
    last_name: string;

    @Column({nullable: true})
    adress: string;
}
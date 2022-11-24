import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Autobus {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text', { nullable: true} )
    marca: string;

    @Column('text', { nullable: true })
    motor: string;

    @Column('text', { nullable: true })
    plazas: string;

}

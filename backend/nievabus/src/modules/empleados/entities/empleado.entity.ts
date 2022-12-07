import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Empleado {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text', { nullable: true} )
    nombre: string;

    @Column('text', { nullable: true} )
    apellidos: string;

    @Column('text', { nullable: true} )
    email: string;

    @Column('text', { nullable: true })
    dni: string;

    @Column('text', { nullable: true} )
    fecha_nacimiento: string;

    @Column('text', { nullable: true })
    telefono: string;

}

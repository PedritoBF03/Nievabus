import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Viaje {

    @PrimaryGeneratedColumn('increment')
    referencia: number;

    @Column('text', { nullable: true} )
    origen: string;

    @Column('text', { nullable: true })
    destino: string;

    @Column('text', { nullable: true })
    hora_inicio: string;

    @Column('text', { nullable: true })
    ida_vuelta: string;

    @Column('text', { nullable: true })
    matricula_autobus: string;
    
    @Column('text', { nullable: true })
    dni_cliente: string;

    @Column('text', { nullable: true })
    dni_empleado: string;
}

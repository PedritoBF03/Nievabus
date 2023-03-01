import { Viaje } from "src/modules/viajes/entities/viaje.entity";
import { Column, Entity, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Empleado {

    @PrimaryColumn()
    dni: string;

    @Column('text', { nullable: true} )
    nombre: string;

    @Column('text', { nullable: true} )
    apellidos: string;

    @Column('text', { nullable: true} )
    email: string;

    @Column('text', { nullable: true} )
    fecha_nacimiento: string;

    @Column('text', { nullable: true })
    telefono: string;

    @ManyToMany(
        () => Viaje,
        (viaje) => viaje.empleado,
        {onDelete: 'CASCADE'}
    )
    viaje?: Viaje[];
}

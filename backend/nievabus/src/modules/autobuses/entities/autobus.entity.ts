import { Viaje } from "src/modules/viajes/entities/viaje.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Autobus {

    @PrimaryColumn()
    matricula: string;

    @Column('text', { nullable: true} )
    marca: string;

    @Column('text', { nullable: true })
    modelo: string;

    @Column('text', { nullable: true })
    plazas: string;


    //ManyToMany viajes
    @ManyToMany(
        () => Viaje,
        (viaje) => viaje.autobus,
        { onDelete: 'CASCADE' }
    )
    viaje?: Viaje[];

}

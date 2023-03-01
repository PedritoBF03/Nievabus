import { Autobus } from "src/modules/autobuses/entities/autobus.entity";
import { Cliente } from "src/modules/clientes/entities/cliente.entity";
import { Empleado } from "src/modules/empleados/entities/empleado.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Viaje {

    @PrimaryColumn()
    referencia: string;

    @Column('text', { nullable: true} )
    descripcion: string;

    @Column('text', { nullable: true} )
    origen: string;

    @Column('text', { nullable: true })
    destino: string;

    @Column('text', { nullable: true })
    hora_inicio: string;

    @Column('text', { nullable: true })
    ida_vuelta: string;
    
    @Column('text', {nullable: true} )
    imagen: string;

    //ManyToMany Clientes
    @ManyToMany(
        () => Cliente,
        (cliente) => cliente.viaje,
        { onDelete: 'CASCADE' }
    )
    @JoinTable({
        name: 'viajes_clientes',
        joinColumn: {
            name: 'Referencia_viajes'
        },
        inverseJoinColumn: {
            name: 'DNI_Cliente'
        }
    })
    cliente?: Cliente[];


    //ManyToMany Autobuses
    @ManyToMany(
        () => Autobus,
        (autobus) => autobus.viaje,
        { onDelete: 'CASCADE' }
    )
    @JoinTable({
        name: 'viajes_autobuses',
        joinColumn: {
            name: 'Referencia_viajes'
        },
        inverseJoinColumn: {
            name: 'Matricula_Autobus'
        }
    })
    autobus?: Autobus[];


    //ManyToMany Empleados
    @ManyToMany(
        () => Empleado,
        (empleado) => empleado.viaje,
        { onDelete: 'CASCADE' }
    )
    @JoinTable({
        name: 'viajes_empleados',
        joinColumn: {
            name: 'Referencia_viajes'
        },
        inverseJoinColumn: {
            name: 'DNI_Empleado'
        }
    })
    empleado?: Empleado[];
}

import { Cliente } from "src/modules/clientes/entities/cliente.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {

    //Prueba dejando de clave primaria a DNI
    @PrimaryColumn()
    dni: string;

    @Column('text', { nullable: true} )
    username: string;

    @Column('text', { nullable: true })
    email: string;

    @Column('text', { nullable: true })
    instagram: string;

    @Column('text', { nullable: true })
    facebook: string;

    @Column('text', { nullable: true })
    twitter: string;

    @OneToOne(
        () => Cliente,
        (cliente) => cliente.usuario,
        {onDelete: 'CASCADE'}
    )
    @JoinColumn()
    cliente: Cliente;

}
import { Usuario } from "src/modules/usuarios/entities/usuario.entity";
import { Viaje } from "src/modules/viajes/entities/viaje.entity";
import { Column, PrimaryGeneratedColumn, Entity , BeforeInsert, OneToMany, OneToOne, JoinColumn, PrimaryColumn, ManyToMany, ManyToOne} from "typeorm";

@Entity()
export class Cliente {

    @PrimaryColumn()
    dni: string;

    @Column('text', { nullable: true} )
    name: string;

    @Column('text', { nullable: true })
    telefono: string;

    @Column('text', { nullable: true })
    direccion: string;

    @OneToOne(
        () => Usuario,
        (usuario) => usuario.cliente,
        { onDelete: 'CASCADE'}
    )
    usuario: Usuario;


    @ManyToMany(
        () => Viaje,
        (viaje) => viaje.cliente,
        { onDelete: 'CASCADE' }
    )
    viaje: Viaje[];
}


    // @OneToMany(
    //     () => Libro,
    //     (Libro) => Libro.cliente,
    //     { cascade: false }
    // )
    // libros?: Libro[];



    // @BeforeInsert()
    // checkGithub(){
    //     if (!this.github.includes('https://github.com/')){
    //         this.github = `https://github.com/${this.github}`
    //     }
    // }
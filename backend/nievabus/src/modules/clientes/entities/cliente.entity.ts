import { Usuario } from "src/modules/usuarios/entities/usuario.entity";
import { Column, PrimaryGeneratedColumn, Entity , BeforeInsert, OneToMany, OneToOne, JoinColumn} from "typeorm";

@Entity()
export class Cliente {

    //Prueba dejando vlave primaria a DNI
    // @PrimaryGeneratedColumn('increment')
    // id: number;

    @PrimaryGeneratedColumn('identity')
    dni: string;

    //Original
    // @PrimaryGeneratedColumn('increment')
    // id: number;

    // @Column('text', { nullable: true })
    // dni: string;

    @Column('text', { nullable: true} )
    name: string;

    @Column('text', { nullable: true })
    telefono: string;

    @Column('text', { nullable: true })
    direccion: string;

    @OneToOne(
        () => Usuario,
        (usuario) => usuario.cliente,
        { eager: true, cascade: true }
    )
    usuario: Usuario;
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
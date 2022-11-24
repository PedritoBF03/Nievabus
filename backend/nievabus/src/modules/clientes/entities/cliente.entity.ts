import { Column, PrimaryGeneratedColumn, Entity , BeforeInsert, OneToMany} from "typeorm";

@Entity()
export class Cliente {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text', { nullable: true} )
    name: string;

    @Column('text', { nullable: true })
    dni: string;

    @Column('text', { nullable: true })
    telefono: string;



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

   

}




// {
//     "name": "Pedro Benitez Fuentes",
//     "telefono": "652656468",
//     "email": "pedro@gmail.com",
//     "dni": "12345678V",
// }
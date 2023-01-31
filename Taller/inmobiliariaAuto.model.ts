import { Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    JoinColumn, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";
import { Autos } from './autos.model';


@Entity('aereopuertoAviones',{schema:'aereopuertoAviones'})
export class Inmobiliaria{
    //columnas de la entidad 
    @PrimaryGeneratedColumn('NameI')
    id:string;
    @CreateDateColumn({
        name:'create_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    
    createAT:Date;

    @UpdateDateColumn({
        name:'update_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    updateAt:Date;

    @DeleteDateColumn({
        name:'delete_at',
        type:'timestamptz',
        nullable:true,
    })

    deleteAt:Date;
    
    @OneToMany(() => Autos, (autos) => autos.Inmobiliaria)
    @JoinColumn({name:'colegios_id'})
    autos:Autos;
    
    @Column('varchar',{
        name:'inmobiliaria',
        comment: 'Nombre de la inmobiliaria',
    })
    aereopuerto:string;

    @Column('varchar',{
        name:'Tipo de auto',
        comment:'Tipo de auto',
    })
    linea:string;
 
    
    @Column('varchar',{
        name:'numero_inmobiliaria',
        comment:'Numero al que inmobiliaria pertenece'
    })
    
    numberOfDistrit:string;
    static collage: any;

}

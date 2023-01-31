import { Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, JoinColumn, 
    ManyToOne, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";
import { Inmobiliaria} from './inmobiliariaAuto.model';

@Entity('AereopuertoAV',{schema:'avionAereopuerto'})

export class Autos{
    //columnas de la entidad 
    @PrimaryGeneratedColumn('NameInmobiliaria')
    id:string;
    @CreateDateColumn({
        //objeto
        name:'create_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    
    createAT:Date;//atributo

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

    deleteAt:Date; //el nombre del atributo
    //Relationships
    //paramtrro de entrada =>
    @ManyToOne(() => Inmobiliaria, (inmobiliaria) => Inmobiliaria)
    @JoinColumn({name:'autos_id'})
    inmobiliaria: CategoryEntity;

    @Column('varchar',{
        name:'name',
        unique:true,
        comment: 'Nombre de auto',
    })
    NameOfAvion:string;

    @Column('varchar',{
        name:'linea',
        unique:true,
        comment:'linea del auto',
    })
    linea:string;
    
    @Column('varchar',{
        name:'typeofcollague',
        unique:true,
        comment:'Tipo de motor'
    })
    

}
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {Exclude} from "class-transformer"
@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    phone: string

    @Column({default:null})
    name:string
    
    @Column({default:false})
    isActivated: boolean
    
    @CreateDateColumn()
    createdAt: Date
    
    @UpdateDateColumn()
    updatedAt: Date

    @Exclude()
    refreshToken:string

} 
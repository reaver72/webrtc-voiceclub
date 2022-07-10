import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Rooms {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  roomType: string;
  @Column()
  topic: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}

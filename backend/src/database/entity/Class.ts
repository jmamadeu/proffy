import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import User from './User';
import ClassSchedule from './ClassSchedule';

@Entity('classes')
export default class Class {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  subject: string;

  @Column('float')
  cost: number;

  @ManyToOne(() => User, (user) => user.classes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => ClassSchedule, (classSchedule) => classSchedule.class)
  classesSchedule: ClassSchedule[];
}

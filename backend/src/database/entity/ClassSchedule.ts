import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import ClassTable from './Class';

@Entity('class_schedule')
export default class ClassSchedule {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int', { name: 'week_day' })
  weekDay: number;

  @Column('int')
  from: number;

  @Column('int')
  to: number;

  @ManyToOne(() => ClassTable, (classTable) => classTable.classesSchedule, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'class_id' })
  class: ClassTable;
}

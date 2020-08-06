import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import ClassTable from './Class';
import Connection from './Connection';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', { nullable: false })
  name: string;

  @Column('varchar', { nullable: false })
  avatar: string;

  @Column('varchar', { nullable: false })
  whatsapp: string;

  @Column('varchar', { nullable: false })
  bio: string;

  @OneToMany(() => ClassTable, (classTable) => classTable.user)
  classes: ClassTable[];

  @OneToMany(() => Connection, (connection) => connection.user)
  connections: Connection[];
}

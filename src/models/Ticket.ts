import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @CreateDateColumn({ type: "timestamp", nullable: true})
  created: Date;

  @Column({nullable: true})
  updated: Date;

  @CreateDateColumn({ type: "timestamp", nullable: true})
  deleted: Date;

  @ManyToOne(() => User, (user) => user.tickets)
  user: User;
}

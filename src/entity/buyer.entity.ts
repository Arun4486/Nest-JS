import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class BuyerEntity {
  @PrimaryGeneratedColumn()
  id: Number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column({ nullable: true })
  password: string;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Monument {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  country: string;

  @Column()
  loc: string;

  @Column()
  city: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  urlPhoto: string;
}

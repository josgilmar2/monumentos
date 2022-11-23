import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const source = new DataSource({
  type: 'postgres' as const,
  url: process.env.DATABASE,
  entities: ['src/**/*.entity.ts'],
  username: 'postgres',
  password: '1',
});

export default source;

import { Monument } from '../entities/monument.entity';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(Monument)
export abstract class MonumentRepository extends Repository<Monument> {}

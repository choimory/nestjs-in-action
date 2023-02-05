import { Repository } from 'typeorm';
import { Board } from '../entity/board';
import { CustomRepository } from '../../config/typeorm/custom.repository';

@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {}

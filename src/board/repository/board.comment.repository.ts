import { Repository } from 'typeorm';
import { BoardComment } from '../entity/board.comment';
import { CustomRepository } from '../../config/typeorm/custom.repository';

@CustomRepository(BoardComment)
export class BoardCommentRepository extends Repository<BoardComment> {}

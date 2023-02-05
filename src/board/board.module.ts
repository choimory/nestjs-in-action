import { Module } from '@nestjs/common';
import { BoardController } from './controller/board.controller';
import { BoardService } from './service/board.service';
import { BoardCommentController } from './controller/board-comment.controller';
import { BoardCommentService } from './service/board-comment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from './repository/board.repository';
import { BoardCommentRepository } from './repository/board.comment.repository';

@Module({
  controllers: [BoardController, BoardCommentController],
  providers: [BoardService, BoardCommentService],
})
export class BoardModule {}

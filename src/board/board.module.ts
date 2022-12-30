import { Module } from '@nestjs/common';
import { BoardController } from './controller/board.controller';
import { BoardService } from './service/board.service';
import { BoardCommentController } from './controller/board-comment.controller';
import { BoardCommentService } from './service/board-comment.service';

@Module({
  controllers: [BoardController, BoardCommentController],
  providers: [BoardService, BoardCommentService],
})
export class BoardModule {}

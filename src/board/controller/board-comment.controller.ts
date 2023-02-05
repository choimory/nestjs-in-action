import { Controller } from '@nestjs/common';
import { BoardCommentService } from '../service/board-comment.service';

@Controller('board-comment')
export class BoardCommentController {
  constructor(private readonly _boardCommentService: BoardCommentService) {}
}

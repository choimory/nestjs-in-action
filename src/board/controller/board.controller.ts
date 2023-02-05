import { Controller } from '@nestjs/common';
import { BoardService } from '../service/board.service';

@Controller('board')
export class BoardController {
  constructor(private readonly _boardService: BoardService) {}
}

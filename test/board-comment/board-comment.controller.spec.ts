import { Test, TestingModule } from '@nestjs/testing';
import { BoardCommentController } from '../../src/board/controller/board-comment.controller';

describe('BoardCommentController', () => {
  let controller: BoardCommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoardCommentController],
    }).compile();

    controller = module.get<BoardCommentController>(BoardCommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

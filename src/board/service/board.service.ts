import { Injectable } from '@nestjs/common';
import { BoardRepository } from '../repository/board.repository';
import { Connection, DataSource } from 'typeorm';

@Injectable()
export class BoardService {
  constructor(
    private readonly _dataSource: DataSource /*private readonly _boardRepository: BoardRepository,*/,
  ) {}

  public async find() {
    const abc = this._dataSource.transaction(async (em) => {
      return;
    });

    return;
  }
}

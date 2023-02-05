import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmOptions } from './config/typeorm/type.orm.option';
import { BoardModule } from './board/board.module';
import { BoardCommentController } from './board/controller/board-comment.controller';
import { BoardCommentService } from './board/service/board-comment.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`, //package.json의 script로 실행될때 건내진 NODE_ENV
    }),
    TypeOrmModule.forRoot(typeOrmOptions),
    BoardModule,
  ],
  controllers: [AppController, BoardCommentController],
  providers: [AppService, BoardCommentService],
})
export class AppModule {
  private static _nodeEnv: string;
  private static _port: string | number;

  constructor() {
    //.env 파일의 NODE_ENV, .env 파일 없을시 기본 default
    AppModule._nodeEnv = process.env.NODE_ENV
      ? process.env.NODE_ENV
      : 'default';

    //.env 파일의 PORT, .env 파일 없을시 기본 8080
    AppModule._port = process.env.PORT ? process.env.PORT : '8080';
  }

  public static getNodeEnv(): string {
    return this._nodeEnv;
  }

  public static getPort(): string | number {
    return this._port;
  }
}

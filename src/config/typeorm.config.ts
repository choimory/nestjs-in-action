import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmOptions: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: 'localhost', //process.env.DB_HOST,
  port: 3306, //Number(process.env.DB_PORT),
  database: 'nestjs_in_action', //process.env.DB_SCHEMA,
  username: 'root', //process.env.DB_USER,
  password: 'asdqwe123', //process.env.DB_PASSWORD,
  timezone: 'local',
  autoLoadEntities: true,
  charset: 'utf8mb4',
  synchronize: false,
  logging: true,
  keepConnectionAlive: true,
};

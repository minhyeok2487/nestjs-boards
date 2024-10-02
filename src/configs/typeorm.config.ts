import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  username: 'root',
  password: 'admin1234',
  database: 'Boards',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};

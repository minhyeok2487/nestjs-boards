import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'svc.sel5.cloudtype.app',
  port: 31741,
  username: 'root',
  password: '!@alsgur11',
  database: 'citq',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};

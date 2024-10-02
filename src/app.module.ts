import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_URL_PROD'),
        port: Number(configService.get('DATABASE_PORT_PROD')),
        database: configService.get('DATABASE_NAME'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        entities: [path.join(__dirname, '**/*.entity.{js, ts}')],
        synchronize: false,
        logging: true,
        timezone: 'KST',
      }),
    }),
    BoardsModule,
  ],
})
export class AppModule {}

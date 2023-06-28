import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Root@123',
      database: 'meublea',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    } as DataSourceOptions),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
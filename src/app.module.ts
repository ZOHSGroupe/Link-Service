import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkModule } from './link/link.module';
import * as dotenv from 'dotenv';
import { LinkEntity } from './link/entities/link.entity';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 3306,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'admin',
      database: process.env.DB_NAME || 'link_db',
      entities: [LinkEntity],
      synchronize: true,
    }),
    LinkModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

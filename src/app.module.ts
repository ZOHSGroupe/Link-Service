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
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'link_db',
      entities: [LinkEntity],
      synchronize: process.env.NODE_ENV !== 'production', // Set to true in development, false in production
      autoLoadEntities: true, 
    }),
    LinkModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

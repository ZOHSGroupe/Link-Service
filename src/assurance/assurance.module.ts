import { Module } from '@nestjs/common';
import { AssuranceService } from './assurance.service';
import { AssuranceController } from './assurance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssuranceEntity } from './entities/assurance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AssuranceEntity])],
  controllers: [AssuranceController],
  providers: [AssuranceService],
})
export class AssuranceModule {}

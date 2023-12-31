import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AssuranceEntity } from './entities/assurance.entity';

@Injectable()
export class AssuranceService {
    constructor(
        @InjectRepository(AssuranceEntity)
        private readonly assuranceRepository: Repository<AssuranceEntity>,
    ) {}

    getAllAssurances() {
        return this.assuranceRepository.find();
    }

    createAssurance(assuranceData: any) {
        const assurance = this.assuranceRepository.create(assuranceData);
        return this.assuranceRepository.save(assurance);
    }
}

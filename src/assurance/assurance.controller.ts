import { Controller, Get, Post, Body } from '@nestjs/common';
import { AssuranceService } from './assurance.service';

@Controller('assurance')
export class AssuranceController {
    constructor(private readonly assuranceService: AssuranceService) {}

    @Get()
    getAllAssurances() {
        return this.assuranceService.getAllAssurances();
    }

    @Post()
    createAssurance(@Body() assuranceData: any) {
        return this.assuranceService.createAssurance(assuranceData);
    }
}

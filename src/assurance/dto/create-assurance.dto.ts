import { IsString, IsNumber, IsNotEmpty, IsDate, IsDateString } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

export class CreateAssuranceDto {
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    @IsString()
    status: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsString()
    viheculeId: string;

    @IsNotEmpty()
    @IsString()
    type: string;

    @IsDate()
    dateCreate:Date;

    // Constructor with default values
    constructor(status: string, price: number, vihecule_id: string, type: string) {
        this.id = uuidv4(); // Generate UUID v4
        this.status = status;
        this.price = price;
        this.dateCreate = new Date(); // Set to the current date
        this.viheculeId = vihecule_id;
        this.type = type;
    }
}

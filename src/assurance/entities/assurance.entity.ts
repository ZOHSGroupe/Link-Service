import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('assurance')
export class AssuranceEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    status: string;

    @Column()
    type: string;

    @Column({ name: 'vehicle_id' })
    vehicleId: string;

    @Column()
    price: number;

    @CreateDateColumn({ name: 'create_date' ,type: 'date'})
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;
}
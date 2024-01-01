import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum LinkType {
  ProfilePhoto = 'ProfilePhoto',
  FrontNationaleCard = 'FrontNationaleCard',
  BackNationaleCard = 'BackNationaleCard',
  FrontDriverLicenceCard = 'FrontDriverLicenceCard',
  BackDriverLicenceCard = 'BackDriverLicenceCard',
  Contract='Contract',
  FrontViheculeCard = 'FrontViheculeCard',
  BackViheculeCard = 'BackViheculeCard',
}

export enum LinkSource {
  Client = 'Client',
  DriverLicence = 'DriverLicence',
  Contract = 'Contract',
  Vihecule='Vihecule'
}

@Entity('link')
export class LinkEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string
    //{type: 'enum',enum: LinkType    }
    @Column()
    type: string;
    //{type: 'enum',enum: LinkSource}
    @Column({name:'source_link'})
    sourceLink: string

    @Column({name:"id_source"})
    idSource: string

    @Column()
    url:string

    @CreateDateColumn()
    @Column({name:"date_create",type: 'date'})
    createdAt: Date
}

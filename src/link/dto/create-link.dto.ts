import { LinkSource, LinkType } from "../entities/link.entity";

export class CreateLinkDto {
    type: string;
    sourceLink: string;
    idSource: string;
    url:string
}

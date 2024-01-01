import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLinkDto } from './dto/create-link.dto';
import { LinkEntity, LinkType, LinkSource } from './entities/link.entity';
import { UpdateLinkDto } from './dto/update-link.dto';

@Injectable()
export class LinkService {
  constructor(
    @InjectRepository(LinkEntity)
    private readonly linkRepository: Repository<LinkEntity>,
  ) {}

  async createLink(createLinkDTO: CreateLinkDto): Promise<LinkEntity> {
    const { type, sourceLink, idSource, url } = createLinkDTO;
  
    try {
      // Check if a link with the same type, sourceLink, and idSource already exists
      const existingLink = await this.linkRepository.findOne({ where: { type, sourceLink, idSource } });
  
      if (existingLink) {
        existingLink.url=createLinkDTO.url;
        // If a link with the same type, sourceLink, and idSource exists, you can handle it here
        const createdLink = await this.linkRepository.save(existingLink);
        return createdLink;
      }
  
      // If no existing link is found, proceed to create and save the new link
      const linkEntity = new LinkEntity();
      linkEntity.type = type;
      linkEntity.sourceLink = sourceLink;
      linkEntity.idSource = idSource;
      linkEntity.url = url;
      linkEntity.createdAt = new Date();
  
      // Save the entity in the database
      const createdLink = await this.linkRepository.save(linkEntity);
  
      // Return the created entity or any other relevant information
      return createdLink;
    } catch (error) {
      // Handle the error (log, return specific error response, etc.)
      console.error('Error creating link:', error.message);
      throw new Error('Failed to create link.');
    }
  }
  
  async getLinkBySourceTypeAndId(sourceLink: string, type: string, idSource: string): Promise<LinkEntity | null> {
    try {
      // Use TypeORM to find the link in the database
      const link = await this.linkRepository.findOne( {where : {type, idSource,sourceLink }});

      return link || null;
    } catch (error) {
      // Handle any errors (log, throw, etc.)
      console.error('Error fetching link:', error.message);
      throw new Error('Error fetching link');
    }
  }
  async getAllLinks(): Promise<LinkEntity[]> {
    try {
      // Use TypeORM to find all links in the database
      const allLinks = await this.linkRepository.find();

      return allLinks;
    } catch (error) {
      // Handle any errors (log, throw, etc.)
      console.error('Error fetching all links:', error.message);
      throw new Error('Error fetching all links');
    }
  }

  async updateLink(sourceLink: string, type: string, idSource: string, updateData: UpdateLinkDto): Promise<LinkEntity | null> {
    try {
      // Find the link in the database based on source, type, and id
      const linkToUpdate = await this.linkRepository.findOne({ where: { type, idSource, sourceLink } });
  
      if (linkToUpdate) {
        // Update the link entity with the provided data
        //Object.assign(linkToUpdate, updateData);
        linkToUpdate.url=updateData.url;
        // Save the updated entity back to the database
        const updatedLink = await this.linkRepository.save(linkToUpdate);
  
        return updatedLink;
      } else {
        return null; // Link not found, you may want to handle this differently based on your requirements
      }
    } catch (error) {
      console.error('Error updating link:', error.message);
      throw new Error('Error updating link');
    }
  }
  
  async deleteLink(sourceLink: string, type: string, idSource: string): Promise<LinkEntity | null> {
    try {
      // Find the link in the database based on source, type, and id
      const linkToDelete = await this.linkRepository.findOne({ where: { type, idSource, sourceLink } });

      if (linkToDelete) {
        // Delete the link from the database
        const deletedLink = await this.linkRepository.remove(linkToDelete);
        return deletedLink;
      } else {
        return null; // Link not found, you may want to handle this differently based on your requirements
      }
    } catch (error) {
      console.error('Error deleting link:', error.message);
      throw new Error('Error deleting link');
    }
  }


}


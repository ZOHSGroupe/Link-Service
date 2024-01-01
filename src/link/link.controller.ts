import { Controller, Get, Post, Body, Patch, Param, Delete,HttpCode,HttpStatus,Res, Put } from '@nestjs/common';
import { LinkService } from './link.service';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';

@Controller('link')
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Post()
  async create(@Body() createLinkDto: CreateLinkDto, @Res() res) {
    try{
      await this.linkService.createLink(createLinkDto)
      res.status(HttpStatus.CREATED).json({ message: 'Link added successfully' });
    }catch(error){
      // Handle any errors (log, return an error response, etc.)
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error fetching link' });
    }
    
  }
  @Get("/:source/:type/:id")
  async getLink(@Param('source') source: string, @Param('type') type: string, @Param('id') id: string, @Res() res) {
    try {
      // Call the service method to retrieve the link based on parameters
      const link = await this.linkService.getLinkBySourceTypeAndId(source, type, id);

      if (link) {
        // Return the link if found
        res.status(HttpStatus.OK).json({url:link.url});
      } else {
        // Return a 404 response if the link is not found
        res.status(HttpStatus.NOT_FOUND).json({ message: 'Link not found'})
      }
    } catch (error) {
      // Handle any errors (log, return an error response, etc.)
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error fetching link' });
    }
  }
  @Get()
  async getAllLinks(@Res() res) {
    try {
      const allLinks = await this.linkService.getAllLinks();
      res.status(HttpStatus.OK).json(allLinks);
    } catch (error) {
      console.error('Error fetching all links:', error.message);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error fetching all links' });
    }
  }
  @Patch("/:source/:type/:id")
  async updateLink(
    @Param('source') source: string,
    @Param('type') type: string,
    @Param('id') id: string,
    @Body() updateLinkDto: UpdateLinkDto,
    @Res() res,
  ) {
    try {
      const updatedLink = await this.linkService.updateLink(source, type, id, updateLinkDto);

      if (updatedLink) {
        res.status(HttpStatus.OK).json({ message: 'Link updated successfully' });
      } else {
        res.status(HttpStatus.NOT_FOUND).json({ message: 'Link not found' });
      }
    } catch (error) {
      console.error('Error updating link:', error.message);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error updating link' });
    }
  }
  @Delete("/:source/:type/:id")
  async deleteLink(
    @Param('source') source: string,
    @Param('type') type: string,
    @Param('id') id: string,
    @Res() res,
  ) {
    try {
      const deletedLink = await this.linkService.deleteLink(source, type, id);

      if (deletedLink) {
        res.status(HttpStatus.OK).json(deletedLink);
      } else {
        res.status(HttpStatus.NOT_FOUND).json({ message: 'Link not found' });
      }
    } catch (error) {
      console.error('Error deleting link:', error.message);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error deleting link' });
    }
  }


}

import { Controller, Post, Get, Patch, Body, Param } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';

@Controller('collections')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @Post()
  createCollection(@Body() createDto: CreateCollectionDto) {
    return this.collectionService.createCollection(createDto);
  }

  @Get('user/:userId')
  findCollectionByUser(@Param('userId') userId: string) {
    return this.collectionService.findCollectionByUser(userId);
  }

  @Patch(':collectionId')
  updateCollection(
    @Param('collectionId') collectionId: string,
    @Body() updateDto: UpdateCollectionDto,
  ) {
    return this.collectionService.updateCollection(collectionId, updateDto);
  }
}

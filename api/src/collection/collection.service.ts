import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';

@Injectable()
export class CollectionService {
  constructor(private prisma: PrismaService) {}

  async createCollection(createDto: CreateCollectionDto) {
    const collection = await this.prisma.collection.create({
      data: {
        userId: createDto.userId,
        wasteType: createDto.wasteType,
        dateScheduled: new Date(createDto.dateScheduled),
      },
    });

    return {
      message: 'Collection scheduled successfully',
      collection,
    };
  }

  async findCollectionByUser(userId: string) {
    return this.prisma.collection.findMany({
      where: { userId },
      orderBy: { dateScheduled: 'desc' },
    });
  }

  async updateCollection(collectionId: string, updateDto: UpdateCollectionDto) {
    const collection = await this.prisma.collection.update({
      where: { collectionId },
      data: {
        status: updateDto.status,
        weightKg: updateDto.weightKg,
      },
    });

    return {
      message: 'Collection updated successfully',
      collection,
    };
  }
}

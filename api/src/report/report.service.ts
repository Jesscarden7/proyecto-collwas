import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReportService {
  constructor(private prisma: PrismaService) {}

  async getUserReport(userId: string) {
    const collections = await this.prisma.collection.findMany({
      where: { userId },
      orderBy: { dateCollected: 'desc' },
      select: {
        collectionId: true,
        wasteType: true,
        dateScheduled: true,
        dateCollected: true,
        status: true,
        weightKg: true,
        pointsEarned: true,
      },
    });

    const totalWeight = collections.reduce(
      (sum, c) => sum + (c.weightKg ?? 0),
      0,
    );

    const totalPoints = collections.reduce(
      (sum, c) => sum + (c.pointsEarned ?? 0),
      0,
    );

    return {
      userId,
      totalWeight,
      totalPoints,
      collections,
    };
  }
}

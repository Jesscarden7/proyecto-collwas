import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    super({
      log: ['error'], // Logging level
    });
  }

  onModuleInit(): void {
    this.$connect().catch((error) => {
      this.logger.error(error);
    });
  }

  onModuleDestroy(): void {
    this.$disconnect().catch((error) => {
      this.logger.error(error);
    });
  }
}

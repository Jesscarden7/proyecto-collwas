import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CollectionModule } from './collection/collection.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    CollectionModule,
    ReportModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

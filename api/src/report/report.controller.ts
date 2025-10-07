import { Controller, Get, Param } from '@nestjs/common';
import { ReportService } from './report.service';

@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get('user/:userId')
  getUserReport(@Param('userId') userId: string) {
    return this.reportService.getUserReport(userId);
  }
}

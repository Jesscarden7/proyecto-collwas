import { IsOptional, IsNumber, IsEnum } from 'class-validator';
import { CollectionStatus } from '../enum/collection.enum';

export class UpdateCollectionDto {
  @IsOptional()
  @IsEnum(CollectionStatus)
  status?: CollectionStatus;

  @IsOptional()
  @IsNumber()
  weightKg?: number;
}

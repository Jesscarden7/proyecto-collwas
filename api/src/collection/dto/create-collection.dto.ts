import { IsDateString, IsEnum, IsString } from 'class-validator';
import { WasteType } from '../enum/collection.enum';

export class CreateCollectionDto {
  @IsString()
  userId: string;

  @IsEnum(WasteType)
  wasteType: WasteType;

  @IsDateString()
  dateScheduled: string;
}

import { IsNumber, Min } from 'class-validator';

export class CreateDto {
  @Min(1)
  @IsNumber()
  num: number;
}

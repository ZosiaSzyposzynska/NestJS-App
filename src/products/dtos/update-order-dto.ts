import { Transform } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
  Min,
  IsUUID,
} from 'class-validator';

export class UpdateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @Length(10, 20)
  client: string;

  @IsInt()
  @Min(0)
  price: number;

  @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
  address: string;

  @IsUUID()
  productId: string;
}

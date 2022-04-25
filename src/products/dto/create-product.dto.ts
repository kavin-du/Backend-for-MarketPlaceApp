import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateProductDto {
  @IsNotEmpty()
  title: string;

  @Type(() => Number) // should transform number types in multipart/form-data
  @IsNumber()
  price: number;
  
  @Type(() => Number)
  @IsNumber()
  categoryId: number;

  @IsNotEmpty()
  description: string;

  images: Array<Express.Multer.File>;

  location: string;
}
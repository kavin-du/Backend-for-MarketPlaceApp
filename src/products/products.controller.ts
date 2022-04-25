import { Body, Controller, Get, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@Controller('listings')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts(): Product[] {
    return this.productsService.getAll();
  }

  @Post()
  @UseInterceptors(FilesInterceptor('images'))
  addproduct(@Body() body: CreateProductDto, @UploadedFiles() images: Array<Express.Multer.File>) {
    console.log(body);    
    console.log(images);
  }

}

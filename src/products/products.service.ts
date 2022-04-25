import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      title: 'Watch for sale',
      images: [
        {
          url: 'https://static-01.daraz.lk/p/130151e217c1c6d9d2db173e11db4b84.jpg',
          thumbnailUrl: 'https://static-01.daraz.lk/p/130151e217c1c6d9d2db173e11db4b84.jpg',
        }
      ],
      price: 145,
      categoryId: 5,
      userId: 1,
      localtion: {
        latitude: 37.78825,
        longitude: -122.4324,
      }
    },
    {
      id: 2,
      title: 'Laptop for you',
      images: [
        {
          url: 'https://www.cnet.com/a/img/resize/98031c0bfd8c5dfd98117d7c0d93064913da587f/2022/03/11/f1d53613-7d6c-4040-b583-778446fba1cd/surfacelaptop4.jpg?auto=webp&fit=crop&height=675&width=1200',
          thumbnailUrl: 'https://www.cnet.com/a/img/resize/98031c0bfd8c5dfd98117d7c0d93064913da587f/2022/03/11/f1d53613-7d6c-4040-b583-778446fba1cd/surfacelaptop4.jpg?auto=webp&fit=crop&height=675&width=1200',
        }
      ],
      price: 186,
      categoryId: 6,
      userId: 1,
      localtion: {
        latitude: 37.78825,
        longitude: -122.4324,
      }
    },
  ];


  getAll(): Product[] {
    return this.products;
  }

}

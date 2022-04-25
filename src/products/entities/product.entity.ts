export class Product {
  id: number;
  title: string;
  images: [
    {
      url: string;
      thumbnailUrl: string;
    }
  ];
  price: number;
  categoryId: number;
  userId: number;
  localtion: {
    latitude: number;
    longitude: number;
  }
}
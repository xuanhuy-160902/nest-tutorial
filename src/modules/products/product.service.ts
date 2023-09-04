import { Injectable } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { Product } from 'src/models/product.model';

@Injectable()
export class ProductService {
  private products: Product[] = [
    { id: 1, categoryId: 2, price: 80000, productName: 'Keyboard' },
    { id: 2, categoryId: 3, price: 90000, productName: 'Nine Dev' },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  createProducts(productDto: ProductDto): Product {
    const newProduct: Product = { id: Math.random(), ...productDto };
    this.products.push(newProduct);
    return newProduct;
  }

  detailProduct(id: string): Product {
    return this.products.find((item) => item.id === parseInt(id));
  }

  updateProduct(productDto: ProductDto, id: string): Product {
    const index = this.products.findIndex((item) => item.id === parseInt(id));
    this.products[index].productName = productDto.productName;
    this.products[index].categoryId = productDto.categoryId;
    this.products[index].price = productDto.price;
    return this.products[index];
  }

  deleteProduct(): string {
    return 'DELETE PRODUCT';
  }
}

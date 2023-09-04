import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ResponseData } from 'global/globalClass';
import { HttpMessage, HttpStatus } from 'global/globalEnum';
import { Product } from 'models/product.model';
import { ProductDto } from 'dto/product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts(): ResponseData<Product[]> {
    try {
      const res = new ResponseData<Product[]>(
        this.productService.getProducts(),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
      return res;
    } catch (err) {
      const res = new ResponseData<Product[]>(
        this.productService.getProducts(),
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
      return res;
    }
  }

  @Post()
  createProducts(@Body() productDto: ProductDto): ResponseData<ProductDto> {
    try {
      const res = new ResponseData<ProductDto>(
        productDto,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
      return res;
    } catch (err) {
      const res = new ResponseData<ProductDto>(
        productDto,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
      return res;
    }
  }

  @Get('/:id')
  detailProduct(@Param('id') id: string): ResponseData<Product> {
    try {
      const res = new ResponseData<Product>(
        this.productService.detailProduct(id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
      return res;
    } catch (err) {
      const res = new ResponseData<Product>(
        this.productService.detailProduct(id),
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
      return res;
    }
  }

  @Put('/:id')
  updateProduct(): ResponseData<string> {
    try {
      const res = new ResponseData<string>(
        this.productService.updateProduct(),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
      return res;
    } catch (err) {
      const res = new ResponseData<string>(
        this.productService.updateProduct(),
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
      return res;
    }
  }

  @Delete('/:id')
  deleteProduct(): ResponseData<string> {
    try {
      const res = new ResponseData<string>(
        this.productService.deleteProduct(),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
      return res;
    } catch (err) {
      const res = new ResponseData<string>(
        this.productService.deleteProduct(),
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
      return res;
    }
  }
}

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
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { Product } from 'src/models/product.model';
import { ProductDto } from 'src/dto/product.dto';

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
      const res = new ResponseData<null>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
      return res;
    }
  }

  @Post()
  createProducts(@Body() productDto: ProductDto): ResponseData<ProductDto> {
    try {
      const res = new ResponseData<Product>(
        this.productService.createProducts(productDto),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
      return res;
    } catch (err) {
      const res = new ResponseData<null>(
        null,
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
      const res = new ResponseData<null>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
      return res;
    }
  }

  @Put('/:id')
  updateProduct(
    @Body() productDto: ProductDto,
    @Param('id') id: string,
  ): ResponseData<Product> {
    try {
      const res = new ResponseData<Product>(
        this.productService.updateProduct(productDto, id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
      return res;
    } catch (err) {
      const res = new ResponseData<null>(
        null,
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
      const res = new ResponseData<null>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
      return res;
    }
  }
}

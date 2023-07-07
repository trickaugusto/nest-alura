import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductRepository } from './product.repository';

@Controller('/product')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() dataProduct) {
    this.productRepository.save(dataProduct);
  }

  @Get()
  async getProduct() {
    return this.productRepository.getAll();
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDTO } from './dto/CreateProductDTO';
import { ProductRepository } from './product.repository';

@Controller('/product')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() dataProduct: CreateProductDTO) {
    this.productRepository.save(dataProduct);
  }

  @Get()
  async getProduct() {
    return this.productRepository.getAll();
  }
}

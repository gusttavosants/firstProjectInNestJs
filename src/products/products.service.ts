import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from './products.entity';
import { UpsertProductDTO } from './dto/upsert-products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    return this.findProductById(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    await this.findProductById(id);
    await this.productsRepository.delete(id);
    return { message: 'Produto removido com sucesso' };
  }

  async create(productDto: UpsertProductDTO): Promise<Product> {
    const newProduct = this.productsRepository.create(productDto);
    await this.productsRepository.save(newProduct);
    return newProduct;
  }

  async update(id: number, updateDto: UpsertProductDTO): Promise<Product | null> {
    await this.findProductById(id);
    await this.productsRepository.update(id, updateDto);
    return this.productsRepository.findOneBy({ id });
  }

  /**
   * Verifica se o produto existe. Lança NotFoundException se não encontrado.
   */
  private async findProductById(id: number): Promise<Product> {
    const product = await this.productsRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Produto não encontrado com id ${id}`);
    }
    return product;
  }
}
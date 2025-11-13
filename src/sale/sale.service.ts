import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sale } from './entity/sale.entity';
import { Repository } from 'typeorm';
import { CreateSaleDTO } from './dto/createSale.dto';

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale)
    private readonly SaleRepository: Repository<Sale>,
  ) {}

  findAll(): Promise<Sale[]> {
    return this.SaleRepository.find();
  }

  async findOne(id: number): Promise<Sale> {
    return this.findSaleById(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    await this.findSaleById(id);
    await this.SaleRepository.delete(id);
    return { message: 'Venda removida com sucesso' };
  }

  async create(SaleDto: CreateSaleDTO): Promise<Sale> {
    const newSale = this.SaleRepository.create(SaleDto);
    await this.SaleRepository.save(newSale);
    return newSale;
  }

  async update(id: number, updateDto: CreateSaleDTO): Promise<Sale | null> {
    await this.findSaleById(id);
    await this.SaleRepository.update(id, updateDto);
    return this.SaleRepository.findOneBy({ id });
  }

  /**
   * Verifica se o produto existe. Lança NotFoundException se não encontrado.
   */
  private async findSaleById(id: number): Promise<Sale> {
    const Sale = await this.SaleRepository.findOneBy({ id });
    if (!Sale) {
      throw new NotFoundException(`Venda não encontrada com id ${id}`);
    }
    return Sale;
  }
}
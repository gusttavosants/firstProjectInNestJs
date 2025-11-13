import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customers } from './entity/customers.entity';
import { CreateCustomersDTO } from './dto/create-customers.dto';
import { CreateUpdateDTO } from './dto/create-update.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customers)
    private readonly customersRepository: Repository<Customers>,
  ) {}

  findAll(): Promise<Customers[]> {
    return this.customersRepository.find();
  }

  async findOne(id: number): Promise<Customers> {
    return this.findCustomerById(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    await this.findCustomerById(id);
    await this.customersRepository.delete(id);
    return { message: 'Cliente removido com sucesso' };
  }

  async create(customerDto: CreateCustomersDTO): Promise<Customers> {
    const newCustomer = this.customersRepository.create(customerDto);
    await this.customersRepository.save(newCustomer);
    return newCustomer;
  }

  async update(id: number, updateDto: CreateUpdateDTO): Promise<Customers | null> {
    await this.findCustomerById(id);
    await this.customersRepository.update(id, updateDto);
    return this.customersRepository.findOneBy({ id });
  }

  /**
   * Verifica se o cliente existe. Lança NotFoundException se não encontrado.
   */
  private async findCustomerById(id: number): Promise<Customers> {
    const customer = await this.customersRepository.findOneBy({ id });
    if (!customer) {
      throw new NotFoundException(`Cliente não encontrado com id ${id}`);
    }
    return customer;
  }
}
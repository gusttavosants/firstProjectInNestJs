import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Employee } from './employee.entity';
import { CreateEmployeeDTO } from './dto/create-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  async findOne(id: number): Promise<Employee> {
    return this.findEmployeeById(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    await this.findEmployeeById(id);
    await this.employeeRepository.delete(id);
    return { message: 'Funcionário removido com sucesso' };
  }

  async create(employeeDto: CreateEmployeeDTO): Promise<Employee> {
    const newEmployee = this.employeeRepository.create(employeeDto);
    await this.employeeRepository.save(newEmployee);
    return newEmployee;
  }

  async update(id: number, updateDto: CreateEmployeeDTO): Promise<Employee  | null> {
    await this.findEmployeeById(id);
    await this.employeeRepository.update(id, updateDto);
    return this.employeeRepository.findOneBy({ id });
  }

  /**
   * Verifica se o funcionário existe. Lança NotFoundException se não encontrado.
   */
  private async findEmployeeById(id: number): Promise<Employee> {
    const employee = await this.employeeRepository.findOneBy({ id });
    if (!employee) {
      throw new NotFoundException(`Funcionário não encontrado com id ${id}`);
    }
    return employee;
  }
}
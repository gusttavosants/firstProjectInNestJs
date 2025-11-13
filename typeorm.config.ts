import { DataSource } from 'typeorm';
import { Customers } from './src/customers/customers.entity';
import { Employee } from './src/employee/employee.entity';
import { Product } from './src/products/products.entity';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'curso',
  entities: [Customers,Employee,Product],
  migrations: ['dist/migrations/*.js'],
});

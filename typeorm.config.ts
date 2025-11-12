import { DataSource } from 'typeorm';
import { Customers } from './src/customers/customers.entity';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'curso',
  entities: [Customers],
  migrations: ['dist/migrations/*.js'],
});

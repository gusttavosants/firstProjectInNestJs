import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306, //padrao mysql
    username: 'root',
    password: '',
    database: 'curso',
    entities: [],
    synchronize: false,  // importante! false em produção
    logging: true,
}),
  
  CustomersModule, EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

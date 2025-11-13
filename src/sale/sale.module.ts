import { Module } from '@nestjs/common';
import { SaleController } from './sale.controller';
import { SaleService } from './sale.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { saleProduct } from './entity/saleProduct.entity';
import { Sale } from './entity/sale.entity';

@Module({
  imports: [TypeOrmModule.forFeature([saleProduct,Sale])],
  controllers: [SaleController],
  providers: [SaleService]
})
export class SaleModule {}




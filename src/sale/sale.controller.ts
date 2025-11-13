import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SaleService } from './sale.service';
import { CreateSaleDTO } from './dto/createSale.dto';

@Controller('sale')
export class SaleController {
    constructor (private readonly saleService:SaleService ){}

    @Get('/findall')
        findAll():any{
        return this.saleService.findAll();
    }
    
    @Get('/findall/:id')
        findOne(@Param('id')id:number){
        return this.saleService.findOne(id);
    }
    
    @Post('/add')
        create(@Body() CreateSaleDTO:CreateSaleDTO){
        return this.saleService.create(CreateSaleDTO);
    }
    
    @Delete('/:id')
        remove(@Param('id')id:number,){
        return this.saleService.remove(id)
    }
    
    @Put('/update/:id')
        update(@Body()updateBody:CreateSaleDTO, @Param('id')id:number){
        return this.saleService.update(id,updateBody)
    }

}   

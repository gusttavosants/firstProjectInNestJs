import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { UpsertProductDTO } from './dto/upsert-products.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}
        @Get('/findall')
            findAll() {
            return this.productsService.findAll();
        }

        @Get('/findall/:id')
            findOne(@Param('id')id:number){
            return this.productsService.findOne(id);
        }

        @Post('/add')
            create(@Body() productBody: UpsertProductDTO) {
            return this.productsService.create(productBody);
        }

        @Put('/update/:id')
            update(@Param('id') productID: number, @Body() updateBody: UpsertProductDTO) {
            return this.productsService.update(productID, updateBody);
        }

        @Delete('/delete/:id')
            delete(@Param('id') productID: number) {
            return this.productsService.remove(productID);
        }
}
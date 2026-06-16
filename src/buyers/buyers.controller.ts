import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { BuyersService } from './buyers.service';
import { BuyerUpdateDto } from '../dto/update-buyer.dto';
import { CreateBuyerDto } from '../dto/create-buyer.dto';

@Controller('buyers')
export class BuyersController {
  constructor(private buyerService: BuyersService) {
    this.buyerService = buyerService;
  }
  @Get() //   @Get('/hello')
  getHello() {
    return this.buyerService.get();
  }

  @Post()
  store(@Body() CreateBuyerDto: CreateBuyerDto) {
    return this.buyerService.create(CreateBuyerDto);
  }

  @Patch('/:userId')
  update(
    @Body() BuyerUpdateDto: BuyerUpdateDto,
    @Param() param: { userId: Number },
  ) {
    return this.buyerService.update(BuyerUpdateDto, {
      userId: Number(param.userId),
    });
  }

  @Get('/:userId')
  getUser(@Param('userId', ParseIntPipe) userId: Number) {
    return this.buyerService.getUser(userId);
  }

  @Delete('/:userId')
  deleteUser(@Param() param: { userId: number }) {
    return this.buyerService.deleteUser(param);
  }
}

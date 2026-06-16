import { Module } from '@nestjs/common';
import { BuyersController } from './buyers.controller';
import { BuyersService } from './buyers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuyerEntity } from '../entity/buyer.entity';

@Module({
  controllers: [BuyersController],
  providers: [BuyersService],
  imports: [TypeOrmModule.forFeature([BuyerEntity])],
  exports: [BuyersService],
})
export class BuyersModule {}

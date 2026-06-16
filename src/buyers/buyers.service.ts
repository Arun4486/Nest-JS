import { Injectable } from '@nestjs/common';
import { BuyerUpdateDto } from '../dto/update-buyer.dto';
import { CreateBuyerDto } from '../dto/create-buyer.dto';
import { Repository } from 'typeorm';
import { BuyerEntity } from '../entity/buyer.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BuyersService {
  constructor(
    @InjectRepository(BuyerEntity)
    private buyerRepository: Repository<BuyerEntity>,
  ) {}
  get(): Promise<BuyerEntity[]> {
    return this.buyerRepository.find();
  }

  create(CreateBuyerDto: CreateBuyerDto) {
    return this.buyerRepository.save(CreateBuyerDto);
  }
  getUser(userId: Number) {
    return this.buyerRepository.findOne({ where: { id: Number(userId) } });
  }
  update(BuyerUpdateDto: BuyerUpdateDto, param: { userId: number }) {
    return this.buyerRepository.update(param.userId, BuyerUpdateDto);
  }
  deleteUser(param: { userId: number }) {
    return this.buyerRepository.delete(param.userId);
  }

  findByEmail(email: string) {
    return this.buyerRepository.findOne({ where: { email } });
  }
}

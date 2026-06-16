import { Injectable } from '@nestjs/common';
import { BuyersService } from '../buyers/buyers.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private buyerService: BuyersService,
    private jwtService: JwtService,
  ) {}
  async validateUser(email: string, password: string) {
    const buyer = await this.buyerService.findByEmail(email);
    if (buyer && buyer.password === password) {
      return buyer;
    }
    return null;
  }
  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

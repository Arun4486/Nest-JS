import { IsString, IsEmail } from 'class-validator';
export class BuyerUpdateDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}

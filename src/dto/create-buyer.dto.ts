import { IsString, IsEmail } from 'class-validator';
export class CreateBuyerDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}

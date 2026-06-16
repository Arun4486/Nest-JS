import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BuyersModule } from './buyers/buyers.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BuyerEntity } from './entity/buyer.entity';
import { ProfileModule } from './profile/profile.module';

@Module({
  controllers: [AppController],
  providers: [],
  imports: [
    BuyersModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'arunkatiyar',
      password: 'Akdb1',
      database: 'mydb',
      entities: [BuyerEntity],
      synchronize: true,
    }),
    ProfileModule,
  ],
})
export class AppModule {}

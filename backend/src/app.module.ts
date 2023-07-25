import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CryptoModule } from './coingecko/crypto/crypto.module';
//import { HttpModule } from '@nestjs/axios'; //'@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CryptoModule,
    // HttpModule,
  ],
  controllers: [], //[AppController],
  providers: [], //[AppService],
})
export class AppModule {}

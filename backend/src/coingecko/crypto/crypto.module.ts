import { Module } from '@nestjs/common';
import { CryptoController } from './crypto.controller';
import { CryptoService } from './crypto.service';
// import { HttpService } from '@nestjs/axios';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [CryptoController],
  providers: [CryptoService],
})
export class CryptoModule {}

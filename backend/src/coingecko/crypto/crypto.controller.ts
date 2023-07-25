import { Controller, Get } from '@nestjs/common';
import { CryptoService } from './crypto.service';
import { CoinsEntity, Crypto, Item } from './crypto/crypto.interface';
// import { AxiosResponse } from 'axios';
// import { Observable } from 'rxjs/internal/Observable';

@Controller('crypto')
export class CryptoController {
  constructor(private cryptoservice: CryptoService) {}
  //// Specify the data to return to the frontend
  @Get()
  async trendingEight() {
    // const res = this.cryptoservice.trendingEight();
    // console.log('Backend Controller Res: ', res);
    // return res;
    return await this.cryptoservice.trendingEight();
  }
}

import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios from 'axios';
// import { Observable } from 'rxjs/internal/Observable';
// import { map } from 'rxjs/operators';

@Injectable()
export class CryptoService {
  constructor(public http: HttpService) {}
  async trendingEight() {
    //: Observable<AxiosResponse<any>> {
    // return this.http
    //   .get('https://api.coingecko.com/api/v3/search/trending')
    //   .pipe(map((res) => res));
    try {
      return await axios
        .get('http://api.coingecko.com/api/v3/search/trending')
        .then((res) => res.data);
    } catch (error) {
      throw new InternalServerErrorException('Cannot get the resource!');
    }
  }
}

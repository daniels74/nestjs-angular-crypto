import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoinsEntity, Crypto, Item } from '../Interfaces/crypto';
import { BehaviorSubject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinGeckoService {
  dataSubject$ = new BehaviorSubject<CoinsEntity[]>([])
  data$ = this.dataSubject$.asObservable();

  constructor(public http: HttpClient) { }

  retrieveCrypto() {
    const res = this.http.get<Crypto>('http://localhost:3000/crypto')
    .pipe(
      map((res) => {
        this.dataSubject$.next(res.coins);
        return res.coins;
      })
    );
    res.subscribe(console.log);
  }
}



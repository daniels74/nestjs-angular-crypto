import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { CoinsEntity, Item, Crypto } from '../../Core/Interfaces/crypto';
import { CoinGeckoService } from 'src/app/Core/Services/coin-gecko.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private cryptoService: CoinGeckoService) {}

  crypto$!: Observable<CoinsEntity[]>;

  ngOnInit() {
    // this.cryptoService.retrieveCrypto();
    this.crypto$ = this.cryptoService.data$;
  }
}

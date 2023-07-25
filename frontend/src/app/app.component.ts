import { Component, OnInit } from '@angular/core';
import { CoinGeckoService } from './Core/Services/coin-gecko.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private cryptoService: CoinGeckoService) {}
  ngOnInit(): void {
    this.cryptoService.retrieveCrypto();
  }
  title = 'frontend';


}

import { CryptoService } from './crypto.service';
export declare class CryptoController {
    private cryptoservice;
    constructor(cryptoservice: CryptoService);
    trendingEight(): Promise<any>;
}

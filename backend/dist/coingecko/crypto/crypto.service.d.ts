import { HttpService } from '@nestjs/axios';
export declare class CryptoService {
    http: HttpService;
    constructor(http: HttpService);
    trendingEight(): Promise<any>;
}

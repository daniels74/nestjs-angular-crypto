export interface Crypto {
    coins: CoinsEntity[];
    nfts?: null[] | null;
    exchanges?: null[] | null;
  }
  export interface CoinsEntity {
    item: Item;
  }
  export interface Item {
    id: string;
    coin_id: number;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    small: string;
    large: string;
    slug: string;
    price_btc: number;
    score: number;
  }
  
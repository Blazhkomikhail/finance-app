export interface ITicker {
  ticker: string;
  exchange: string;
  price: number;
  change: number;
  changePercent: number;
  dividend: number;
  lastTradeTime: string;
}

export interface ITickerSocketData {
  ticker: string;
  exchange: string;
  price: number;
  change: number;
  change_percent: number;
  dividend: number;
  last_trade_time: string;
}

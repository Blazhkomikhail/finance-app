import React from 'react';
import { ITicker } from '../../types/ticker';
import getTime from '../../utils/getTime';
import './ticker.scss';

export const Ticker = ({
  ticker,
  exchange,
  price,
  change,
  change_percent,
  dividend,
  last_trade_time
}: ITicker) => {
  const changePercent = `(${Math.floor(change_percent * 100)}%)`;

  return (
    <div className="ticker"> 
      <div className="ticker_content">
        <div className="ticker_main">
          <div className="ticker_name">{ticker}</div>
          <span className="ticker_exchange">{exchange}</span>
          <span className="ticker_last-update-time">{getTime(last_trade_time)}</span>
        </div>
        <div className="ticker_numbers">
          <div className="ticker_price">{price}</div>
          <div className="ticker_change">
            <span className="ticker_change__abs">{change}</span> 
            <span className="ticker_change__pecent">{changePercent}</span>
          </div>
          <div className="ticker_additional-num">
            <span className="ticker_divident">dividend: {dividend}</span>
          </div>
        </div>
        <div className="ticker_arrow-wrap">
          <span className="ticker_arrow"></span>
        </div>
      </div>
    </div>
  );
};
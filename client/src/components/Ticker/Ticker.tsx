import React, { useState } from 'react';
import { ITicker } from '../../types/ticker';
import getTime from '../../utils/getTime';
import './ticker.scss';

interface TickerProps extends ITicker {
  status: boolean;
}

export const Ticker = ({
  status,
  ticker,
  exchange,
  price,
  change,
  change_percent,
  dividend,
  last_trade_time
}: TickerProps) => {
  const changePercent = `(${Math.floor(change_percent * 100)}%)`;
  const [isShowed, setIsShowed] = useState(true);
  const [hide, setHide] = useState(false);
  const onCloseHandle = () => {
    setHide(true);
    setTimeout(() => setIsShowed(false), 1000);
  }

  return (
    <div 
      className={`ticker ${status ? 'ticker_rise' : 'ticker_fall'} ${hide ? 'hide' : ''}`}
      style={isShowed ? {display: "block"} : {display: "none"}}
    >
      <div className="ticker_content">
        <div className="ticker_main">
          <div className="ticker_name-wrap">
            <span className="ticker_name">{ticker}</span>
          </div>
          <span className="ticker_exchange">{exchange}</span>
          <span className="ticker_last-update-time">{getTime(last_trade_time)}</span>
        </div>
        <div className="ticker_numbers">
          <div className="ticker_price-wrap">
            <span className="ticker_price">{price}</span> 
          </div>
          <div className="ticker_change">
            <span className="ticker_change__abs">{change}</span> 
            <span className="ticker_change__pecent">{changePercent}</span>
          </div>
          <div className="ticker_additional-num">
            <span className="ticker_divident">dividend: {dividend}</span>
          </div>
        </div>
        <div className="ticker_arrow-wrap">
          <span className={`ticker_arrow ${status ? 'ticker_arrow__up' : 'ticker_arrow__down'}`}></span>
        </div>
        <div className="ticker_buttons">
          <span 
            onClick={onCloseHandle}
            className="ticker_close-btn"
          />
        </div>
      </div>
    </div>
  );
};
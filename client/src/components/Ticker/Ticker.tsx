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
  const [isFlipped, setIsFlipped] = useState(false);
  const [hide, setHide] = useState(false);
  const onCloseHandle = () => {
    setHide(true);
    setTimeout(() => setIsShowed(false), 1000);
  }

  const onSwitchHandle = () => {
    setIsFlipped(prev => !prev);
  }

  return (
    <div 
      className={`ticker-wrap${hide ? ' hide' : ''}${isFlipped ? ' flipped' : ''}`}
      style={isShowed ? {display: "block"} : {display: "none"}}
    >
      <div className="ticker">
        <div className={`ticker_frontside${status ? ' ticker_rise' : ' ticker_fall'}`}>
          <div className="ticker_front-content">
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
              <span 
                className="ticker_switch-btn"
                onClick={onSwitchHandle}
              >Switch off
              </span>
            </div>
          </div>
        </div>
        <div className="ticker_backside">
          <span className="ticker_backside-name">{ticker}</span>
          <span 
            className="ticker_switch-btn ticker_switch-btn__back"
            onClick={onSwitchHandle}
          >Switch on
          </span>
        </div>
      </div>
    </div>
  );
};
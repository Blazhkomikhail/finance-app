import React, { useState } from 'react';
import { ITicker } from '../../types/ticker';
import Frontside from './Fronside/Frontside';
import Backside from './Backside/Backside';
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
  last_trade_time,
}: TickerProps) => {
  const changePercent = `(${Math.floor(change_percent * 100)}%)`;
  const [isShowed, setIsShowed] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);
  const [hide, setHide] = useState(false);
  const onCloseHandle = () => {
    setHide(true);
    setTimeout(() => setIsShowed(false), 1000);
  };

  const onSwitchHandle = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className={`ticker-wrap${hide ? ' hide' : ''}${
        isFlipped ? ' flipped' : ''
      }`}
      style={isShowed ? { display: 'block' } : { display: 'none' }}
    >
      <div className="ticker">
        <Frontside
          status={status}
          ticker={ticker}
          exchange={exchange}
          last_trade_time={last_trade_time}
          price={price}
          change={change}
          changePercent={changePercent}
          dividend={dividend}
          onCloseHandle={onCloseHandle}
          onSwitchHandle={onSwitchHandle}
        />
        <Backside ticker={ticker} onSwitchHandle={onSwitchHandle} />
      </div>
    </div>
  );
};

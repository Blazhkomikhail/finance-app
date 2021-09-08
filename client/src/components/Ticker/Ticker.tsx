import React, { useState } from 'react';
import { ITicker } from '../../types/ticker';
import Frontside from './Fronside/Frontside';
import Backside from './Backside/Backside';
import './ticker.scss';

interface TickerProps extends ITicker {
  status: boolean;
}

export const Ticker: React.FC<TickerProps> = ({
  status,
  ticker,
  exchange,
  price,
  change,
  changePercent,
  dividend,
  lastTradeTime,
}): JSX.Element => {
  const percent = `(${Math.floor(changePercent * 100)}%)`;
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
          lastTradeTime={lastTradeTime}
          price={price}
          change={change}
          changePercent={percent}
          dividend={dividend}
          onCloseHandle={onCloseHandle}
          onSwitchHandle={onSwitchHandle}
        />
        <Backside ticker={ticker} onSwitchHandle={onSwitchHandle} />
      </div>
    </div>
  );
};

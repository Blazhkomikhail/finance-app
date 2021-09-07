import React from 'react';
import getTime from '../../../utils/getTime';

type FrontsideProps = {
  status: boolean;
  ticker: string;
  exchange: string;
  last_trade_time: string;
  price: number;
  change: number;
  changePercent: string;
  dividend: number;
  onCloseHandle: () => void;
  onSwitchHandle: () => void;
};

const Frontside: React.FC<FrontsideProps> = ({
  status,
  ticker,
  exchange,
  last_trade_time,
  price,
  change,
  changePercent,
  dividend,
  onCloseHandle,
  onSwitchHandle
}): JSX.Element => {
  return (
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
  );
};

export default Frontside;
import React from 'react';
import { useSelector } from 'react-redux';
import { ITickerSocketData } from '../../types/ticker';
import { Ticker } from '../Ticker/Ticker';
import SettingsPanel from '../SettingsPanel/SettingsPanel';
import './field.scss';

const Field: React.FC = (): JSX.Element => {
  const prevTickersData = useSelector(
    (state: { prevTickers: ITickerSocketData[] }) => state.prevTickers
  );
  const tickersData = useSelector(
    (state: { tickers: ITickerSocketData[] }) => state.tickers
  );
  return (
    <div className="field">
      <h2 className="field-heading">The most popular tickers</h2>
      <SettingsPanel />
      <div className="field_tickers-wrap">
        {tickersData.map((ticker, idx) => (
          <Ticker
            key={ticker.ticker}
            status={
              prevTickersData.length
                ? prevTickersData[idx].price <= ticker.price
                : false
            }
            ticker={ticker.ticker}
            exchange={ticker.exchange}
            price={ticker.price}
            change={ticker.change}
            changePercent={ticker.change_percent}
            dividend={ticker.dividend}
            lastTradeTime={ticker.last_trade_time}
          />
        ))}
      </div>
    </div>
  );
};

export default Field;

import React from 'react';

type BacksideProps = {
  ticker: string;
  onSwitchHandle: () => void;
};
const Backside: React.FC<BacksideProps> = ({
  ticker,
  onSwitchHandle,
}): JSX.Element => {
  return (
    <div className="ticker_backside">
      <span className="ticker_backside-name">{ticker}</span>
      <span
        role="button"
        tabIndex={0}
        className="ticker_switch-btn ticker_switch-btn__back"
        onClick={onSwitchHandle}
        onKeyDown={onSwitchHandle}
      >
        Switch on
      </span>
    </div>
  );
};

export default Backside;

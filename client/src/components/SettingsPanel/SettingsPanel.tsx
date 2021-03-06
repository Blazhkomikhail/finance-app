import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateIntervalThunk } from '../../redux/thunk';
import { socket } from '../../socket/socket';
import './settingsPanel.scss';

const SettingsPanel: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const currentInterval = useSelector(
    (store: { interval: number }) => store.interval
  );
  const onChangeHandle = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateIntervalThunk(Number(event.target.value), socket));
  };
  return (
    <div className="settings">
      <form>
        <label htmlFor="select">
          Select update interval
          <select
            data-testid="select"
            className="settings_interval-select"
            value={currentInterval}
            onChange={onChangeHandle}
            name="interval"
            id="select"
          >
            <option value="1000">1 sec</option>
            <option value="3000">3 sec</option>
            <option value="5000">5 sec</option>
            <option value="10000">10 sec</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default SettingsPanel;

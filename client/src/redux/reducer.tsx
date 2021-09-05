import { Socket } from 'socket.io-client';
import { updateServerInterval } from '../api/api';
import { ITicker } from '../types/ticker';
interface IAction {
  type: string;
  payload: ITicker[];
}

const UPDATE_TICKERS = 'UPDATE_TICKERS';
const UPDATE_INTERVAL = 'UPDATE_INTERVAL';

const defaultState = {
  tickers: [] as ITicker[],
  interval: 5000
}

const reducer = (
  state = defaultState,
  action: IAction) => {
    switch(action.type) {
      case UPDATE_TICKERS: {
        return {...state, tickers: [...action.payload] };
      }
      case UPDATE_INTERVAL: {
        return {...state, interval: action.payload };
      }
      default:
        return state;
    }
}

export const updateTickersAction = (payload: ITicker[]) => ({
  type: UPDATE_TICKERS,
  payload,
});

export const updateIntervalAction = (payload: number) => ({
  type: UPDATE_INTERVAL,
  payload,
});

export const updateIntervalThunk = (interval: number, socket: Socket) => {
  return (dispatch: (arg0: { type: string; payload: number }) => void) => {
    dispatch(updateIntervalAction(interval));
    updateServerInterval(interval, socket);
  }
}

export default reducer;
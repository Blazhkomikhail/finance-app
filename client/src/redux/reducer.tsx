import { ITicker } from '../types/ticker';

interface IAction {
  type: string;
  payload: ITicker[];
}

const UPDATE_TICKERS = 'UPDATE_TICKERS';
const UPDATE_INTERVAL = 'UPDATE_INTERVAL';

export const defaultState = {
  prevTickers: [] as ITicker[],
  tickers: [] as ITicker[],
  interval: 5000,
};

const reducer = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case UPDATE_TICKERS: {
      return {
        ...state,
        prevTickers: [...state.tickers],
        tickers: [...action.payload],
      };
    }
    case UPDATE_INTERVAL: {
      return { ...state, interval: action.payload };
    }
    default:
      return state;
  }
};

export const updateTickersAction = (payload: ITicker[]): IAction => ({
  type: UPDATE_TICKERS,
  payload,
});

export const updateIntervalAction = (
  payload: number
): { type: string; payload: number } => ({
  type: UPDATE_INTERVAL,
  payload,
});

export default reducer;

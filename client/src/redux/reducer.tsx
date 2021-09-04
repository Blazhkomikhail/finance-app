import { ITicker } from '../types/ticker';
interface IAction {
  type: string;
  payload: ITicker[];
}

const UPDATE_TICKERS = 'UPDATE_TICKERS';

const defaultState = {
  tickers: [] as ITicker[]
}

const reducer = (
  state = defaultState,
  action: IAction) => {
    switch(action.type) {
      case UPDATE_TICKERS: {
        return {...state, tickers: [...action.payload] };
      }
      default: 
        return state;
    }
}

export const updateTickersAction = (payload: ITicker[]) => ({
  type: UPDATE_TICKERS,
  payload,
});

export default reducer;
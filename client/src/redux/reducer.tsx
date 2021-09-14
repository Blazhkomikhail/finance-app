import { ITicker } from '../types/ticker';

enum ActionTypesEnum {
  UPDATE_TICKERS = 'UPDATE_TICKERS',
  UPDATE_INTERVAL = 'UPDATE_INTERVAL',
}

export const defaultState = {
  prevTickers: [] as ITicker[],
  tickers: [] as ITicker[],
  interval: 5000,
};

type ActionsTypesProp = ActionTypes<typeof actions>;

const reducer = (state = defaultState, action: ActionsTypesProp) => {
  switch (action.type) {
    case ActionTypesEnum.UPDATE_TICKERS: {
      return {
        ...state,
        prevTickers: [...state.tickers],
        tickers: [...action.payload],
      };
    }
    case ActionTypesEnum.UPDATE_INTERVAL: {
      return { ...state, interval: action.payload };
    }
    default:
      return state;
  }
};

type PropertiesTypes<T> = T extends {[key: string] : infer U} ? U : never;
type ActionTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>;

export const actions = {

  updateTickersAction : (payload: ITicker[]) => ({
    type: ActionTypesEnum.UPDATE_TICKERS,
    payload,
  } as const),
  
  updateIntervalAction : (payload: number) => ({
    type: ActionTypesEnum.UPDATE_INTERVAL,
    payload,
  } as const),
}

export default reducer;
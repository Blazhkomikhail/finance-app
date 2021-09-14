import { Socket } from 'socket.io-client';
import { updateServerInterval } from '../api/api';
import { actions } from './reducer';

export const updateIntervalThunk = (
  interval: number,
  socket: Socket
): ((dispatch: any) => void) => {
  return (dispatch: (arg0: { type: string; payload: number }) => void) => {
    dispatch(actions.updateIntervalAction(interval));
    updateServerInterval(interval, socket);
  };
};

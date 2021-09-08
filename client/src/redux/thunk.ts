import { Socket } from 'socket.io-client';
import { updateServerInterval } from '../api/api';
import { updateIntervalAction } from './reducer';

export const updateIntervalThunk = (interval: number, socket: Socket) => {
  return (dispatch: (arg0: { type: string; payload: number }) => void) => {
    dispatch(updateIntervalAction(interval));
    updateServerInterval(interval, socket);
  };
};

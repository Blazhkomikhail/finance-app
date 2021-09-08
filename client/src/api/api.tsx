import { Dispatch } from 'react';
import { Socket as SocketType } from 'socket.io-client';
import { ITicker } from '../types/ticker';
import { socket } from '../socket/socket';
import { updateTickersAction } from '../redux/reducer';

export const getTickers = (
  dispatch: Dispatch<{
    type: string;
    payload: ITicker[];
  }>
): void => {
  socket.on('connect', () => {
    socket.emit('start');

    socket.on('ticker', (data) => dispatch(updateTickersAction(data)));
  });

  socket.on('connect_error', () => console.log('connection error'));
  socket.on('disconnect', () => console.log('disconnect'));
};

export const updateServerInterval = (
  interval: number,
  socketInst: SocketType
): void => {
  socketInst.emit('changeTimeout', { interval });
};

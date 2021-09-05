import { socket } from '../socket/socket';
import { updateTickersAction } from '../redux/reducer';
import { Dispatch } from 'react';
import { Socket } from 'socket.io-client';

export const getTickers = (dispatch: Dispatch<any>) => {
  
  socket.on('connect', () => {
    socket.emit('start');
    
    socket.on('ticker', (data) => {
      dispatch(updateTickersAction(data));
    })
  })
  
  socket.on('connect_error', err => console.log('connection error'));
  socket.on('connect_failed', err => console.log('failed'));
  socket.on('disconnect', err => console.log('disconnect'));
}

export const updateServerInterval = (interval: number, socket: Socket) => {
  socket.emit('changeTimeout', { interval });
}
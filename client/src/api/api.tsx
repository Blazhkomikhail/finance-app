import { socket } from '../socket/socket';
import { updateTickersAction } from '../redux/reducer';
import { Dispatch } from 'react';

export const getTickers = (dispatch: Dispatch<any>) => {
  socket.on('connect', () => {
    socket.emit('start');
  
    socket.on('ticker', (data) => {
      console.log(data);
      dispatch(updateTickersAction(data));
    })
  })
}
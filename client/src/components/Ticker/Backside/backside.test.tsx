import React from "react";
import { render, screen } from '@testing-library/react';
import Backside from './Backside';

const clickHandle = () => {
  return 'click';
}

it('Should include switch on text', () => {
  render(<Backside ticker={'AAPL'} onSwitchHandle={clickHandle}/>);
  expect(screen.findByText(/Switch on/i)).toBeDefined();
})
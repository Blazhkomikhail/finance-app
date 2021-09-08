import React from "react";
import { render, screen } from '@testing-library/react';
import Frontside from './Frontside';
import { FrontsideProps } from './Frontside';

const defaultProps = {
  status: true,
  ticker: 'AAPL',
  exchange: 'NYCE',
  last_trade_time: '2021-04-30T11:53:21.000Z',
  price: 100,
  change: 20,
  changePercent: 10,
  dividend: 5,
  onCloseHandle: () => 'void',
  onSwitchHandle: () => 'void'
}

const frontSide = (props: any = null) => render(<Frontside {...props} {...defaultProps}/>)

describe('Front side ticker', () => {

  beforeEach(frontSide);
  
  it('Should appear', () => {
    expect(screen.getByTestId('front')).toBeDefined();
  })

  it('Should show ticker name', () => {
    expect(screen.getByText(/aapl/i)).toBeDefined();
  })

  it('Should show exchange name', () => {
    expect(screen.getByText(/nyce/i)).toBeDefined();
  })

  it('Should show time', () => {
    expect(screen.getByText(/11:53:21/i)).toBeDefined();
  })

  it('Should show price', () => {
    expect(screen.getByText(/100/i)).toBeDefined();
  })
})
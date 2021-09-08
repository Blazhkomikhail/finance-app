import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import SettingsPanel from './SettingsPanel';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { defaultState } from "../../redux/reducer";
import thunk from 'redux-thunk'

const middlewares = [thunk]
const initialState = defaultState;
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

const panel = () => render(<Provider store={store}><SettingsPanel /></Provider>);

describe('Setting Panel', () => {

  it('Should contain label text', () => {
    panel();
    expect(screen.getByLabelText(/Select update interval/i)).toBeDefined();
  });
})


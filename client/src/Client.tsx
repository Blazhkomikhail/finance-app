import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { applyMiddleware, createStore } from 'redux';
import reducer from './redux/reducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>  
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

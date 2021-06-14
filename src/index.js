import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore} from 'redux'

import rootRudcer from './rootReducer'

const store = createStore(rootRudcer);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


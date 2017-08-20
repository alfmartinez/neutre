import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import reducers from './store';
import {setStatus} from './store/actions';

const store = createStore(reducers);
store.dispatch(setStatus('OK'));

render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));

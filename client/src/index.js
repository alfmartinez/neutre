import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import reducers from './store';
import {getServerStatus} from './store/actions';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);
store.dispatch(getServerStatus());

render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));

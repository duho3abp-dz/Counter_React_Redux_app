import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, bindActionCreators} from 'redux';
import Reducer from './reducer';

import App from './components/app';

// * Logic *
const store = createStore(Reducer);
const {subscribe} = store;
// const {inc, dec, res} = bindActionCreators(actions, dispatch);

// * View *
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
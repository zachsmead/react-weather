import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'; // this is a middleware package;
                                          // middleware deals with actions
                                          // made by action creators.
                                          // middleware does something,
                                          // really anything we want,
                                          // to an action, before letting
                                          // the action pass through
                                          // to our reducers.

import App from './components/app';
import reducers from './reducers';

// this line is where we actually hook up our middleware to the app.
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

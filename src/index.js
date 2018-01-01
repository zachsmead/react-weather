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
// here's what ReduxPromise does - when we dispatch the fetchWeather action in
// src/actions/index.js, it makes an API call to the weather forcast API.
// what is returned by that call, designated in that action creator as 'payload':
// is a promise - a type of javascript object. ReduxPromise detects that the
// payload is a promise, and stops the action before it reaches the reducer.
// it unwraps the promise and grabs the data inside, then dispatches a new
// action with that data now as the payload instead of the promise.
// so we will see in src/actions/index.js that a promise shows up in the console
// log after 'Request', whereas a data object shows up in the console log in
// reducer_weather.js after 'Action received'. 

import App from './components/app';
import reducers from './reducers';

// this line is where we actually hook up our middleware to the app.
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

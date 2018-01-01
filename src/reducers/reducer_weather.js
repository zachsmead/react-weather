import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  console.log('Action received', action)
  switch(action.type) {
  case FETCH_WEATHER:
    // return state.concat([action.payload.data]);
    return [ action.payload.data, ...state ]; // this is a piece of ES6 syntax
                                              // which says to return a new array,
                                              // with the action payload as an item
                                              // inside it, and then (the three
                                              // dots say) this other object might
                                              // be an array, so take its items
                                              // and add them to the aforementioned
                                              // array. so it flattens the inputs
                                              // into a single array that gets
                                              // returned.
  }
  return state;
}

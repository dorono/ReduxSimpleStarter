import FETCH_WEATHER from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    // concat merges new data with state to form a NEW state object (as opposed to
    // just updating an existing state);
    // return state.concat([action.payload.data]);

    // this does pretty much the same thing as the return before, but in this case it puts
    // the new data on the same level as the action.payload.data
    return [action.payload.data, ...state]; // [city, city, city], NOT [city [city]...]
  }

  return state;
}

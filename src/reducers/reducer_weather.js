import FETCH_WEATHER from '../actions/index';

export default function (state = [], action) {
  console.log('typeof action.type', typeof action.type);
  switch (action.type) {
  case 'FETCH_WEATHER':
    console.log('it is FETCH_WEATHER');
    // concat merges new data with state to form a NEW state object (as opposed to
    // just updating an existing state);
    // return state.concat([action.payload.data]);

    // this does pretty much the same thing as the return before, but in this case it puts
    // the new data on the same level as the action.payload.data
    console.log('[action.payload.data, ...state]', [action.payload.data, ...state])
    return [action.payload.data, ...state]; // [city, city, city], NOT [city [city]...]
  }

  return state;
}

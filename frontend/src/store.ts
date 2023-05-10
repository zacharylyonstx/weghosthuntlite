// src/store.ts
import { legacy_createStore as createStore} from 'redux'


const initialState = {
  data: []
};

// @ts-ignore
const reducer = (state = initialState, action) => {
  if (action.type === "SET_DATA") {
    return { ...state, data: action.data };
  }
  return state;
};

const store = createStore(reducer);
export default store;

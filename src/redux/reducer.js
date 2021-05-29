import { SET_TODO_LIST } from "./types";
import update from "immutability-helper";
const initialState = {
  list: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODO_LIST:
      return update(state, {
        list: {
          $set: action.payload,
        },
      });
    default:
      return state;
  }
};

export default reducer;

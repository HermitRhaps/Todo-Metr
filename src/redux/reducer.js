import { SET_TODO_LIST, TODO_SEARCH_REQUESTED } from "./types";
import update from "immutability-helper";

const initialState = {
  list: [],
  filteredList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODO_LIST:
      return update(state, {
        list: {
          $set: action.payload,
        },
        filteredList: {
          $set: [],
        },
      });
    case TODO_SEARCH_REQUESTED:
      return update(state, {
        filteredList: {
          $set: state.list.length
            ? state.list.filter((i) => i.todo_title === action.payload)
            : [],
        },
      });
    default:
      return state;
  }
};

export default reducer;

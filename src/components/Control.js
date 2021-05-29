import React, { useState } from "react";
import eventWatcher from "./tools/eventWatcher";
import { useDispatch } from "react-redux";
import { TODO_SEARCH_REQUESTED } from "../redux/types";
const Control = ({ sendStatus }) => {
  const dispatch = useDispatch();
  const [searchElement, setSearchElement] = useState(null);
  return (
    <div className="wrapper">
      <div className="item">
        <input
          type="button"
          value="create"
          data-type="create-button"
          className="button"
          onClick={(e) => eventWatcher(e, sendStatus, null)}
        />
      </div>
      <div className="item">
        <input
          type="text"
          data-type="search-input"
          className="input"
          placeholder="Enter todo title..."
          onChange={(e) => eventWatcher(e, setSearchElement, null)}
        />
      </div>
      <div className="item">
        <input
          type="button"
          data-type="search-submit"
          value="search"
          className="button"
          onClick={() =>
            dispatch({
              type: TODO_SEARCH_REQUESTED,
              payload: searchElement,
            })
          }
        />
      </div>
    </div>
  );
};

export default Control;

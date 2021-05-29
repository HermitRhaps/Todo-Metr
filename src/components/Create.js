import React, { useState } from "react";
import eventWatcher from "./tools/eventWatcher";
import { useDispatch } from "react-redux";
const Create = ({ sendStatus }) => {
  const dispatch = useDispatch();
  const [createFlow, setCreateFlow] = useState({
    todo_title: null,
    todo_body: null,
    todo_status: false,
  });
  return (
    <div className="wrapper-col">
      <div className="item-col">
        <input
          type="text"
          data-type="todo-title"
          className="input"
          placeholder="Enter todo title..."
          onChange={(e) => eventWatcher(e, setCreateFlow, createFlow)}
        />
      </div>
      <div className="item-col">
        <input
          type="text"
          data-type="todo-body"
          className="input"
          placeholder="Enter todo body..."
          onChange={(e) => eventWatcher(e, setCreateFlow, createFlow)}
        />
      </div>
      <div className="item-col">
        <button
          type="button"
          data-type="todo-submit"
          className="button"
          onClick={(e) => eventWatcher(e, [dispatch, sendStatus], createFlow)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Create;

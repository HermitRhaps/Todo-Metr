import React, { useState } from "react";
import eventWatcher from "./tools/eventWatcher";
import { useDispatch } from "react-redux";
const Create = () => {
  const dispatch = useDispatch();
  const [createFlow, setCreateFlow] = useState({
    todo_title: null,
    todo_body: null,
    todo_status: false,
  });
  return (
    <div>
      <form>
        <input
          type="text"
          data-type="todo-title"
          onChange={(e) => eventWatcher(e, setCreateFlow, createFlow)}
        />
        <input
          type="text"
          data-type="todo-body"
          onChange={(e) => eventWatcher(e, setCreateFlow, createFlow)}
        />
        <button
          type="button"
          data-type="todo-submit"
          onClick={(e) => eventWatcher(e, dispatch, createFlow)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;

import React, { useState, useEffect } from "react";
import eventWatcher from "./tools/eventWatcher";

import { useDispatch } from "react-redux";
import { TODO_DELETE_REQUESTED, TODO_EDIT_REQUESTED } from "../redux/types";
const Todo = ({ details }) => {
  const dispatch = useDispatch();
  const [editSelected, setEditSelected] = useState(false);
  const [editFlow, setEditFlow] = useState({
    todo_title: null,
    todo_body: null,
  });
  return (
    <div className="wrapper">
      <div className="item">
        {!editSelected ? (
          details.todo_title
        ) : (
          <input
            type="text"
            className="input"
            data-type="todo-edit-title"
            value={editFlow.todo_title}
            placeholder={details.todo_title}
            onChange={(e) => eventWatcher(e, setEditFlow, editFlow)}
          />
        )}
      </div>
      <div className="item">
        {!editSelected ? (
          details.todo_body
        ) : (
          <input
            type="text"
            className="input"
            data-type="todo-edit-body"
            value={editFlow.todo_body}
            placeholder={details.todo_body}
            onChange={(e) => eventWatcher(e, setEditFlow, editFlow)}
          />
        )}
      </div>

      {!editSelected ? (
        <div className="item">
          <button
            data-type="todo-edit"
            className="button"
            onClick={(e) => eventWatcher(e, setEditSelected, null)}
          >
            Edit
          </button>
        </div>
      ) : (
        <div className="item">
          <button
            data-type="todo-edit-submit"
            data-id={Number(details.todo_id)}
            data-was-title={details.todo_title}
            data-was-body={details.todo_body}
            className="button"
            onClick={(e) =>
              eventWatcher(
                e,
                [
                  (data) =>
                    dispatch({
                      type: TODO_EDIT_REQUESTED,
                      payload: data,
                    }),
                  setEditSelected,
                ],
                editFlow
              )
            }
          >
            Save changes
          </button>
        </div>
      )}
      <div className="item">
        <button
          data-type="todo-delete"
          className="button"
          onClick={(e) =>
            eventWatcher(
              e,
              () =>
                dispatch({
                  type: TODO_DELETE_REQUESTED,
                  payload: details.todo_id,
                }),
              null
            )
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default Todo;

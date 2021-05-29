import { call, put, take, takeEvery } from "redux-saga/effects";
import {
  SET_TODO_LIST,
  TODO_FETCH_REQUESTED,
  TODO_SEND_REQUESTED,
  TODO_DELETE_REQUESTED,
  TODO_EDIT_REQUESTED,
} from "./types";
function* todoWatcher() {
  yield takeEvery(TODO_FETCH_REQUESTED, loadTodoFromApi);
  yield takeEvery(TODO_SEND_REQUESTED, sendTodoToApi);
  yield takeEvery(TODO_DELETE_REQUESTED, deleteTodoFromApi);
  yield takeEvery(TODO_EDIT_REQUESTED, editTodoFromApi);
}

async function fetch_from_api(url, params) {
  const response = await fetch(url, params);
  return await response.json();
}

function* loadTodoFromApi() {
  let request = yield call(fetch_from_api, "http://localhost:3001/todo/list");

  yield put({
    type: SET_TODO_LIST,
    payload: request.response,
  });
}

function* sendTodoToApi(payload) {
  let request = yield call(fetch_from_api, "http://localhost:3001/todo/add", {
    method: "post",
    body: JSON.stringify({ details: payload.payload }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  yield put({
    type: SET_TODO_LIST,
    payload: request.response,
  });
}
function* deleteTodoFromApi(payload) {
  let request = yield call(
    fetch_from_api,
    "http://localhost:3001/todo/delete",
    {
      method: "delete",
      body: JSON.stringify({ id: payload.payload }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  yield put({
    type: SET_TODO_LIST,
    payload: request.response,
  });
}
function* editTodoFromApi(payload) {
  let request = yield call(fetch_from_api, "http://localhost:3001/todo/edit", {
    method: "put",
    body: JSON.stringify(payload.payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
  yield put({
    type: SET_TODO_LIST,
    payload: request.response,
  });
}
export default todoWatcher;

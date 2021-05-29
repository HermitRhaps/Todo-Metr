import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer.js";
import todoWatcher from "../redux/sagas";
const saga = createSagaMiddleware();
const store = createStore(
  reducer,
  compose(
    applyMiddleware(saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
saga.run(todoWatcher);

export default store;

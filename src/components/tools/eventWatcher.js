import update from "immutability-helper";
import { TODO_SEND_REQUESTED } from "../../redux/types";
export default function eventWatcher(e, method, data) {
  switch (e.currentTarget.dataset.type) {
    case "create-button":
      method(true);
      break;
    case "search-input":
      method(e.currentTarget.value);
      break;
    case "search-submit":
      console.log(data);
      break;
    case "todo-title":
      method(update(data, { todo_title: { $set: e.currentTarget.value } }));
      break;
    case "todo-body":
      method(update(data, { todo_body: { $set: e.currentTarget.value } }));
      break;
    case "todo-submit":
      method({ type: TODO_SEND_REQUESTED, payload: data });
      break;
    default:
      break;
  }
}

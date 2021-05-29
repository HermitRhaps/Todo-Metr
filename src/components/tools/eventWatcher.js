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
      method[0]({ type: TODO_SEND_REQUESTED, payload: data });
      method[1](false);
      break;
    case "todo-edit":
      method(true);
      break;
    case "todo-edit-title":
      method(update(data, { todo_title: { $set: e.currentTarget.value } }));
      break;
    case "todo-edit-body":
      method(update(data, { todo_body: { $set: e.currentTarget.value } }));
      break;
    case "todo-edit-submit":
      method[0]({
        id: { todo_id: e.currentTarget.dataset.id },
        details: {
          todo_title: data.todo_title || e.currentTarget.dataset.wasTitle,
          todo_body: data.todo_body || e.currentTarget.dataset.wasBody,
        },
      });
      method[1](false);
      break;
    case "todo-delete":
      method();
      break;
    default:
      break;
  }
}

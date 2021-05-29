import React from "react";

const Todo = ({ details }) => {
  return (
    <div>
      <div>{details.todo_title}</div>
      <div>{details.todo_body}</div>
      <div>{details.todo_status}</div>
    </div>
  );
};
export default Todo;

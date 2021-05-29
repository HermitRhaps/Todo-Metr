import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { TODO_FETCH_REQUESTED } from "../redux/types";
import Todo from "./Todo";
const List = ({ list }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: TODO_FETCH_REQUESTED });
  }, [dispatch]);
  return (
    <div>
      {list.length
        ? list.map((e) => <Todo details={e} key={e.todo_id} />)
        : false}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};
export default connect(mapStateToProps, null)(List);

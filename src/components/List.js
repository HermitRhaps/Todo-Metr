import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { TODO_FETCH_REQUESTED } from "../redux/types";
import Todo from "./Todo";
const List = ({ list, filteredList }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: TODO_FETCH_REQUESTED });
  }, [dispatch]);
  return (
    <div className="wrapper-col">
      {!filteredList.length
        ? list.length
          ? list.map((e) => (
              <div className="item-col-fullsize">
                <Todo details={e} key={e.todo_id} />
              </div>
            ))
          : false
        : filteredList.map((e) => (
            <div className="item-col-fullsize">
              <Todo details={e} key={e.todo_id} />
            </div>
          ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.list,
    filteredList: state.filteredList,
  };
};
export default connect(mapStateToProps, null)(List);

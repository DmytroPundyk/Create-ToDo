import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { checkTodo, deleteTodo } from "../redux/slices/toDoSlices";

const TodoList = ({ getInputVal }) => {
  const toDoList = useSelector(state => state.todoList, shallowEqual);
  const disptach = useDispatch();

  const handleOnChange = toDoId => {
    disptach(checkTodo(toDoId));
  };

  const handleRemove = toDoId => {
    disptach(deleteTodo(toDoId));
  };

  const handleEdit = toDoId => {
    getInputVal(toDoId);
  };

  return toDoList.map(list => {
    return (
      <div key={list.id} style={{ border: "1px solid #000", padding: "10px" }}>
        {list.name}
        <input
          type="checkbox"
          value={list.isDone}
          onChange={() => handleOnChange(list.id)}
        />
        <button onClick={() => handleRemove(list.id)}>Remove todo</button>
        <button onClick={() => handleEdit(list.id)}>Edit todo</button>
      </div>
    );
  });
};

export default TodoList;
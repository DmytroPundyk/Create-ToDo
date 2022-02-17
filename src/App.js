import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/Todolist";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  editTodo,
  memoizedCompletedToDo
} from "./redux/slices/toDoSlices";

const App = () => {
  const [inputVal, setInputVal] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editToDoID, setEditToDoID] = useState(null);
  const completedTodo = useSelector(memoizedCompletedToDo);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleInput = e => {
    setInputVal(e.target.value);
  };

  const createTodo = () => {
    if (editMode) {
      dispatch(editTodo({ id: editToDoID, name: inputVal }));
    } else {
      dispatch(addTodo(inputVal));
    }

    setInputVal("");
    setEditToDoID(null);
    setEditMode(false);
  };

  const handleEdit = id => {
    setEditMode(true);
    setEditToDoID(id);
    inputRef.current.focus();
  };

  return (
    <div className="container">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h1>ToDo App</h1>
        <h3>Выполненные таски: {completedTodo}</h3>
        <input ref={inputRef} value={inputVal} onChange={handleInput} />
        <button onClick={createTodo}>{editMode ? "Save" : "Add todo"} </button>
        <TodoList getInputVal={handleEdit} />
      </div>
    </div>
  );
};

export default App;

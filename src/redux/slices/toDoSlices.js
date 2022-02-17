import { createSelector, createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
  name: "toDo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), name: action.payload, isDone: false });
    },
    deleteTodo: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    editTodo: (state, action) => {
      const editToDo = state.find(item => item.id === action.payload.id);
      editToDo.name = action.payload.name;
    },
    checkTodo: (state, action) => {
      const toDo = state.find(item => item.id === action.payload);
      //   console.log(current(toDo));
      toDo.isDone = !toDo.isDone;
    }
  }
});

export const memoizedCompletedToDo = createSelector(
  state => state.todoList,
  list => list.filter(item => item.isDone).length
);

export const { addTodo, deleteTodo, editTodo, checkTodo } = toDoSlice.actions;

export default toDoSlice.reducer;
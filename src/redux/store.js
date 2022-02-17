import { configureStore } from "@reduxjs/toolkit";
import toDoSlice from "./slices/toDoSlices";

export const store = configureStore({
  reducer: {
    todoList: toDoSlice
  }
});
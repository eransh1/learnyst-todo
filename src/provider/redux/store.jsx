

import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./todos"
import editedTodoSlice from "./editedTodo"

export const store = configureStore({
    reducer: {
    todos:TodoSlice,
    editedTodo:editedTodoSlice
    },
  });
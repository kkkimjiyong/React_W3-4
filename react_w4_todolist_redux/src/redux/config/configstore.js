// 원래 있던 코드
import { configureStore } from "@reduxjs/toolkit";

// 새롭게 추가한 부분
import todolist from "../modules/todolist.js";
import todoSlice from "../modules/todoSlice.js";

const store = configureStore({
  todolist: todoSlice.reducer,
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todolist:
      localStorage.getItem("data") === null
        ? []
        : JSON.parse(localStorage.getItem("data")),
  },
  reducers: {
    Addlist: (state, action) => {
      state.todolist = [...state.todolist, action.payload];
    },
    Deletelist: (state, action) => {
      state.todolist = state.todolist.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    Editlist: (state, action) => {
      state.todolist = state.todolist.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return { ...todo };
        }
      });
    },
    Editdetail: (state, action) => {
      state.todolist = action.payload;
    },
  },
});
export default todoSlice;
export const { Addlist, Deletelist, Editlist, Editdetail } = todoSlice.actions;

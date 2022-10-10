// 원래 있던 코드
import { createStore } from "redux";
import { combineReducers } from "redux";

// 새롭게 추가한 부분
import todolist from "../modules/todolist.js";

const rootReducer = combineReducers({
  todolist, // <-- 새롭게 추가한 부분
});
const store = createStore(rootReducer);

export default store;

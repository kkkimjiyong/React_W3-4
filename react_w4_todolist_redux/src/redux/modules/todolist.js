// 초기 상태값
const initialState = {
  todolist:
    //로컬스토리지에서 가져오기
    localStorage.getItem("data") === null
      ? []
      : JSON.parse(localStorage.getItem("data")),
};

//Action creator
const add_list = "components/form/Form/Add";
const del_list = "components/list/List/Delete";
const edit_list = "components/list/List/Edit";
const edit_detail = "pages/Detail/Detail_edit";

export const Addlist = (payload) => {
  return {
    type: add_list,
    payload,
  };
};

export const Deletelist = (payload) => {
  return {
    type: del_list,
    payload,
  };
};

export const Editlist = (payload) => {
  return {
    type: edit_list,
    payload,
  };
};

export const Editdetail = (payload) => {
  return {
    type: edit_detail,
    payload,
  };
};

// 리듀서
export const todolist = (state = initialState, action) => {
  switch (action.type) {
    case add_list:
      return {
        todolist: [...state.todolist, action.payload],
      };
    case del_list:
      return {
        todolist: state.todolist.filter((todo) => {
          return todo.id !== action.payload;
        }),
      };
    case edit_list:
      return {
        todolist: state.todolist.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return { ...todo };
          }
        }),
      };
    case edit_detail:
      return {
        todolist: action.payload,
      };

    default:
      return state;
  }
};
// 모듈파일에서는 리듀서를 export default 한다.
export default todolist;

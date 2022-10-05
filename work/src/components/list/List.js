import React from "react";
import Todo from "../todo/Todo";
import styled from "styled-components";

const Listbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ListTitle = styled.h2`
  text-align: center;
  color: purple;
  margin: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid;
  max-width: 300px;
`;

const Working = styled.div`
  width: 500px;
  padding: 10px;
  display: flex;

  flex-direction: column;
  margin: 0 30px;
  margin-left: 120px;
`;

const Done = styled.div`
  width: 500px;
  padding: 10px;
  display: flex;

  flex-direction: column;
  margin: 0 30px;
`;

const List = ({ list, setList }) => {
  const onDeleteHanlder = (todoId) => {
    //filter함수를 통하여, todoId와 id값이 일치하지 않은 것만 뽑아냄.
    //여기서 인자 todoId는 Todo.js에서 가져온 값
    const newTodos = list.filter((todo) => {
      return todo.id !== todoId;
    });
    //그리고 newTodos로 todos의 state를 변경해준다.
    setList(newTodos);
  };

  //id값 일치한 것의 isDone 값을 반대로 바꿔준다.
  const onEditHanlder = (todoId) => {
    const newTodos = list.map((todo) => {
      if (todoId === todo.id) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return { ...todo };
      }
    });
    setList(newTodos);
  };

  const workinglist = list.filter((todo) => {
    return todo.isDone === false;
  });

  const donelist = list.filter((todo) => {
    return todo.isDone === true;
  });

  return (
    <Listbox>
      <Working>
        <ListTitle>{workinglist.length} 👉 still Working</ListTitle>
        {list.map((todo) => {
          if (todo.isDone === false) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                onEditHanlder={onEditHanlder}
                onDeleteHanlder={onDeleteHanlder}
              />
            );
          } else {
            return null;
          }
        })}
      </Working>
      <Done>
        <ListTitle>{donelist.length} 👉 You did!</ListTitle>

        {list.map((todo) => {
          if (todo.isDone === true) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                onEditHanlder={onEditHanlder}
                onDeleteHanlder={onDeleteHanlder}
              />
            );
          } else {
            return null;
          }
        })}
      </Done>
    </Listbox>
  );
};
export default List;

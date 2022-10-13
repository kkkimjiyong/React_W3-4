import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Deletelist, Editlist } from "../../../../redux/modules/todoSlice.js";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Textbox = styled.div`
  height: 70px;
  word-break: break-all;

`;
const TodoTitle = styled.h2`
  margin: 0 0 15px 0;
  max-width: 300px;
`;
const Buttonset = styled.div`
  display: flex;
  justify-content: space-evenly;
  min-width: 130px;
  width: 100%;
  height: 30px;
  margin-top: 55px;
`;
const PostBox = styled(motion.div)`
  border: 3px solid purple;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  height: 150px;
  max-width: 300px;
  :hover {
    box-shadow: 0 0 5px purple;
  border: 5px solid purple;
  }
`;

const Todobody = styled.div`
  max-width: 120px;
  display: flex;
  flex-direction: column;
  display: inline;
`;

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

const Detailbutton = styled.label`
position: absolute;
top: 10px;
right: 10px;
cursor: pointer;
font-size: 15px;
`

const List = () => {

  const navigate = useNavigate();

  const state = useSelector((state) => state.reducer.todolist);
  const dispatch = useDispatch();

  const onDeleteHanlder = (todoId) => {
    //filter함수를 통하여, todoId와 id값이 일치하지 않은 것만 뽑아냄.
    //여기서 인자 todoId는 Todo.js에서 가져온 값
    dispatch(Deletelist(todoId))
  };

  //id값 일치한 것의 isDone 값을 반대로 바꿔준다.
  const onEditHanlder = (todoId) => {
    dispatch(Editlist(todoId))
  };

  const workinglist = state.filter((todo) => {
    return todo.isDone === false;
  });
  console.log(state)

  const donelist = state.filter((todo) => {
    return todo.isDone === true;
  });


  //시간순으로 나열 
  const Newlist = state.sort((a, b) => {
    if ((a.id) < (b.id)) return -1;
    if ((a.id) > (b.id)) return 1;
    return 0;
  }
  )

  // console.log((Newlist[0].id))

  return (
    <Listbox>
      <Working>
        <ListTitle>{workinglist.length} 👉 still Working</ListTitle>
        {Newlist.map((todo) => {
          if (todo.isDone === false) {
            return (
              <PostBox key={todo.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotateZ: 360 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}>
                <Textbox >
                  <TodoTitle >
                    {todo.title}
                    {todo.check ? "" : "🔥"}
                  </TodoTitle>

                  <Todobody>{todo.body}</Todobody>
                </Textbox>
                <Buttonset>
                  <Button
                    style={{
                      backgroundColor: "#cc00cc",
                    }}
                    variant="contained"
                    onClick={() => onDeleteHanlder(todo.id)}
                  >
                    {" "}
                    삭제하기
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#654ea3",
                    }}
                    onClick={() => onEditHanlder(todo.id)}
                    variant="contained"
                  >
                    {todo.isDone ? "취소" : "완료"}
                  </Button>
                </Buttonset>
                <Detailbutton onClick={() => {
                  navigate(`/${todo.id}`);
                }} htmlFor="detail">📝Edit</Detailbutton>
                <input style={{ display: "none" }} id="detail" type={"button"}></input>
              </PostBox>
            )
          } else {
            return null;
          }
        })}
      </Working>
      <Done>
        <ListTitle>{donelist.length} 👉 You did!</ListTitle>
        {Newlist.map((todo) => {
          if (todo.isDone === true) {
            return (
              <PostBox key={todo.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotateZ: 360 }}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}>
                <Textbox onClick={() => {
                  navigate(`/${todo.id}`);
                }}>
                  <TodoTitle >
                    {todo.title}
                    {todo.check ? "" : "🔥"}
                  </TodoTitle>

                  <Todobody>{todo.body}</Todobody>
                </Textbox>
                <Buttonset>
                  <Button
                    style={{
                      backgroundColor: "#cc00cc",
                    }}
                    variant="contained"
                    onClick={() => onDeleteHanlder(todo.id)}
                  >
                    {" "}
                    삭제하기
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#654ea3",
                    }}
                    onClick={() => onEditHanlder(todo.id)}
                    variant="contained"
                  >
                    {todo.isDone ? "취소" : "완료"}
                  </Button>

                </Buttonset>

              </PostBox>)
          } else {
            return null;
          }
        })}
      </Done>
    </Listbox >
  );
};
export default List;

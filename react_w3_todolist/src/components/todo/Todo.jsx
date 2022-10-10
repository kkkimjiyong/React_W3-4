import React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { motion } from "framer-motion";

const Textbox = styled.div`
  height: 70px;
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
  margin-top: 25px;
`;
const PostBox = styled(motion.div)`
white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 3px solid purple;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  height: 120px;
  max-width: 300px;
  :hover {
    box-shadow: 0 0 5px purple;
  border: 5px solid purple;
  }
`;

const Todobody = styled.div`
  width: 120px;
  height: 200px;
  display: flex;
`;

const Todo = ({ todo, onDeleteHanlder, onEditHanlder }) => {
  return (
    <PostBox
      initial={{ scale: 0 }}
      animate={{ scale: 1, rotateZ: 360 }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}>
      <Textbox>
        <TodoTitle key={todo.id}>
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
    </PostBox>
  );
};

export default Todo;

import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Layout = styled.div`
  width: 1200px;
  height: 800px;
  display: flex;
`;

const Textbody = styled.h3`
  display: flex;
`;

const Texttitle = styled.h1`
  display: flex;
`;

const Homebutton = styled.button`
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 130px;
  width: 120px;
  height: 70px;
  background-color: purple;
  color: white;
  font-weight: 900;
  font-size: large;
  :hover {
    box-shadow: 0 0 5px purple;
  }
`;

const Detailbox = styled(motion.div)`
  flex-direction: column;
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 3px solid purple;
  border-radius: 10px;
  padding: 20px;
  margin: auto;
  height: 400px;
  width: 600px;
  :hover {
    box-shadow: 0 0 5px purple;
    border: 5px solid purple;
  }
`;

const Detail = () => {
  let navigate = useNavigate();
  const state = useSelector((state) => state.todolist.todolist);
  const param = useParams();
  console.log(parseInt(Number(param.id)));

  console.log(param.id);
  //params가 문자였다...
  return (
    <div>
      {state.map((todo) => {
        if (todo.id === Number(param.id))
          return (
            <Layout key={todo.id}>
              <Detailbox>
                <div>{todo.id}</div>
                <Texttitle>{todo.title}</Texttitle>
                <Textbody>{todo.body}</Textbody>
                <Homebutton
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  돌아가자
                </Homebutton>
              </Detailbox>
            </Layout>
          );
      })}
    </div>
  );
};

export default Detail;

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
  margin: auto;
`;

const Textbody = styled.h3`
  display: flex;
`;

const Texttitle = styled.h1`
  display: flex;
`;

const Homebutton = styled.button`
  margin-top: 150px;
  margin-left: 240px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 130px;
  width: 80px;
  height: 40px;
  background-color: #cc00cc;
  color: white;
  font-weight: 900;
  font-size: large;
  border-radius: 30px;
  border: none;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  white-space: normal;
  :hover {
    box-shadow: 0 0 5px purple;
    border: 5px solid purple;
  }
`;

const Detailid = styled.h5`
  font-weight: 400;
  display: flex;
  flex-direction: column;
`;

const Detail = () => {
  let navigate = useNavigate();
  const state = useSelector((state) => state.todolist.todolist);
  const param = useParams();
  console.log(param.id);

  console.log(param.id);
  //params가 문자였다...
  return (
    <>
      {state.map((todo) => {
        if (todo.id === param.id)
          return (
            <Layout key={todo.id}>
              <Detailbox>
                <Detailid>{todo.id}</Detailid>
                <Texttitle>{todo.title}</Texttitle>
                <Textbody>{todo.body}</Textbody>
                <Homebutton
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Back
                </Homebutton>
              </Detailbox>
            </Layout>
          );
      })}
    </>
  );
};

export default Detail;

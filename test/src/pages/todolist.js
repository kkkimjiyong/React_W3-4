import React, { useState } from "react";
import styled from "styled-components";
import List from "../list/list";
import Layout from "../layout/Layout";

const InputForm = styled.form`
  margin-top: 50px;
  position: relative;
  top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Inputbox = styled.input`
  border: none;
  border-radius: 5px;
  background-color: grey;
  :hover {
    background-color: whitesmoke;
    border: 1px solid;
  }
`;

const Sendbutton = styled.button`
  border: none;
  margin-left: 10px;
  border-radius: 5px;
  :hover {
    background-color: purple;
    color: white;
  }
`;

const Title = styled.h1`
  text-align: center;
`;

function Todolist() {
  const initialstate = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
    star: 0,
  };
  const [list, setList] = useState([]);
  const [post, setPost] = useState(initialstate);
  const [number, setNumber] = useState(1);

  const changehandler = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const submithandler = (e) => {
    e.preventDefault();
    if (post.title === "" && post.body === "") {
      alert("비어있어요!");
    } else {
      setNumber(number + 1);
      setList([...list, { ...post, id: number }]);
    }
    setPost(initialstate);
  };

  console.log(list);

  return (
    <Layout>
      <InputForm>
        <Inputbox
          onChange={changehandler}
          name="body"
          id="body"
          type={"text"}
          value={post.body}
        ></Inputbox>
        <Sendbutton type="submit" onClick={submithandler}>
          Send
        </Sendbutton>
      </InputForm>
      <Title>Todo List</Title>
      <List list={list} setList={setList} />
      <post />
    </Layout>
  );
}

export default Todolist;

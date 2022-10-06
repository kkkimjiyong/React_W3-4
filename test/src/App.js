import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Layer = styled.div`
  width: 1200px;
  height: 800px;
  margin: auto;
  background-color: white;
`;

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

const Listbox = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 20px;
`;

const Title = styled.h1`
  text-align: center;
`;

const Postbox = styled(motion.div)`
  width: 100px;
  height: 100px;
  border: 3px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  position: relative;
  top: 50px;
`;

const firstVariants = {
  start: { scale: 0 },
  end: {
    scale: 1,
    rotateZ: 360,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.5,
    },
  },
};

function App() {
  const initialstate = {
    id: 0,
    body: "",
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

  const newlist = list.map((post) => {
    return <div key={post.id} post={post.body} />;
  });

  console.log(list);

  return (
    <Layer>
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
      <Listbox>
        {list.map((post) => {
          return (
            <Postbox variants={firstVariants} initial="start" animate="end">
              {post.body}
            </Postbox>
          );
        })}
      </Listbox>
    </Layer>
  );
}

export default App;

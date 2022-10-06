import "../../App.css";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Todo from "../todo/Todo";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { style } from "@mui/system";
import { CheckBox, ContentPasteOffSharp, RunCircle } from "@mui/icons-material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";
import { motion } from "framer-motion";

const FormCtn = styled.form`
  border-radius: 10px;
  background: linear-gradient(to right, #654ea3, #eaafc8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  gap: 15px;
  max-width: 1200px;
`;

const Inputlabel = styled(motion.div)`
  color: white;
  min-width: 50px;
`;

const Inputarea = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 700;
`;

const Input = styled.input`
  border: none;
  width: 250px;
  height: 40px;
  border-radius: 10px;
  padding: 0 12px;
`;

export default function Form({ list, setList }) {
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
    check: false,
  };

  const [todo, setTodo] = useState(initialState);

  const changehandler = (event) => {
    const { name, value } = event.target;
    //기존값에 덮어씌우는 것.
    //[name]이 title 이니까 앞의 객체에 키값이 title인 속성을 덮어씌움.
    setTodo({ ...todo, [name]: value });
  };

  //todo값을 list에 올리는 작업
  const [number, setNumber] = useState(1);
  const submithabdler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    setNumber(number + 1);
    setList([...list, { ...todo, id: number }]);
    setTodo(initialState);
    setStar(true);
    inputRef.current.focus();
  };

  //중요도체크작업
  //false면 중요한 일
  const [star, setStar] = useState(true);
  const checkhandler = (event) => {
    setStar(!star);
    setTodo({ ...todo, check: star });
  };
  
  //ref를 이용해, input에 포커스디폴트
  const inputRef = useRef();
  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  //useEffect를 사용하여, 마지막 list의 값이 바뀔때만 랜더링진행
  useEffect(() => {
    console.log("run");
  }, [list]);
  return (
    <FormCtn name="myform" onSubmit={submithabdler}>
      <Inputarea>
        <Inputlabel
          initial={{ scale: 0 }}
          transition={{ duration: 1 }}
          animate={{ scale: 1, rotateZ: 360 }}
          htmlFor="title"
        >
          제목
        </Inputlabel>
        <Input
          ref={inputRef}
          maxLength="10"
          onChange={changehandler}
          type="text"
          placeholder="제목을 적어주세요 (10자 이내)"
          name="title"
          value={todo.title}
        ></Input>
        <Inputlabel
          initial={{ scale: 0 }}
          transition={{ duration: 1 }}
          animate={{ scale: 1 }}
          htmlFor="body"
        >
          내용
        </Inputlabel>
        <Input
          onChange={changehandler}
          type="text"
          placeholder="내용을 적어주세요"
          name="body"
          value={todo.body}
        ></Input>
        <input
          id="check"
          type="checkbox"
          checked={star}
          onClick={checkhandler}
        />
        <label htmlFor="check">Important?</label>
        <Button
          style={{
            color: "purple",
            marginLeft: "150px",
            position: "relative",
          }}
          onClick={submithabdler}
          variant=""
          endIcon={<SendIcon />}
        >
          Post
        </Button>
      </Inputarea>
    </FormCtn>
  );
}

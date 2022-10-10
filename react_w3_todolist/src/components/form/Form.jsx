import "../../App.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
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
  :hover {
    box-shadow: 0 0 15px purple;
  }
`;

export default function Form({ list, setList, setSavelist, savelist }) {
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
    check: false,
  };

  const [todo, setTodo] = useState(initialState)
  const [number, setNumber] = useState(0);

  const changehandler = (event) => {
    const { name, value } = event.target;
    //기존값에 덮어씌우는 것.
    //[name]이 title 이니까 앞의 객체에 키값이 title인 속성을 덮어씌움.
    setTodo({ ...todo, [name]: value, id: number });

  };







  //todo값을 list에 올리는 작업

  const submithabdler = (event) => {
    event.preventDefault()
    if (todo.title.trim() === "" || todo.body.trim() === "") {
      alert("공백은 안됩니다!")
    } else {
      setNumber(number + 1);
      setList(cur => [todo, ...cur]);
      setTodo(initialState);
      setStar(true);

    }


  };


  //중요도체크작업
  //false면 중요한 일
  const [star, setStar] = useState(false);
  const checkhandler = (event) => {
    setStar(!star);
    setTodo({ ...todo, check: star });
  };



  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(list))
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
          // ref={inputRef}
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
          onChange={checkhandler}
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

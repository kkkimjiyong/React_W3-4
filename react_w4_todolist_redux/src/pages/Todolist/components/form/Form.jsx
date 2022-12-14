import "../../../../App.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import 'moment/locale/ko';

import { Addlist } from "../../../../redux/modules/todoSlice.js"


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

const Postbtn = styled.button`
margin-left: 150px;
background-color: #cc00cc;
border: none;
border-radius: 15px;
width: 70px;
height: 40px;
font-weight: 700;
cursor:pointer;
color: white;
box-shadow: 0 0 5px purple;
:hover {
  color: white;
  box-shadow: 0 0 15px purple;
}

`
const StyledContainer = styled(ToastContainer)`
font-weight: 700;
color: black;
`

export default function Form({ list, setList }) {

  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer.todolist
  );

  const initialstate = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
    star: true
  }

  //Form 컴포넌트에서만 쓰이므로 redux를 사용할 필요가 없다.
  const [todo, setTodo] = useState(initialstate)
  //id값을 날짜로 설정
  const date = new Date();
  //날짜형식지정
  const number = date.toLocaleString()


  //여기서 todo라는 state는 이 컴포넌트에서만 쓰이므로 usestate를 써도 될듯
  const changehandler = (event) => {
    const { name, value } = event.target;
    //기존값에 덮어씌우는 것.
    //[name]이 title 이니까 앞의 객체에 키값이 title인 속성을 덮어씌움.
    setTodo({ ...todo, [name]: value, id: number })
  };

  //todo값을 list에 올리는 작업
  const submithabdler = (event) => {
    event.preventDefault()
    if (todo.title.trim() === "" || todo.body.trim() === "") {
      toast("빈 칸은 안됩니다!")
    } else {
      dispatch(Addlist(todo))
      setTodo(initialstate)
      setStar(true);
    }


  };
  console.log(state)


  // 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state))
  }, [state]);



  // 중요도체크작업
  // false면 중요한 일
  const [star, setStar] = useState(false);
  const checkhandler = (event) => {
    setStar(!star);
    setTodo({ ...todo, check: star });
  };





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
          maxLength="15"
          onChange={changehandler}
          type="text"
          placeholder="제목을 적어주세요 (15자 이내)"
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
        <Postbtn
          onClick={submithabdler}
        >
          Post
        </Postbtn>
      </Inputarea>
      <StyledContainer />
    </FormCtn>
  );
}

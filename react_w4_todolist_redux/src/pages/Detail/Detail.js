import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Editdetail } from "../../redux/modules/todoSlice.js";
import { toast, ToastContainer } from "react-toastify";
import { textAlign } from "@mui/system";

const Layout = styled.div`
  width: 1200px;
  height: 800px;
  display: flex;
  margin: auto;
`;

const StyledContainer = styled(ToastContainer)`
  font-weight: 700;
  color: black;
`;

const Textbody = styled.h2`
  display: flex;
`;

const Texttitle = styled.h1`
  display: flex;
`;

const Homebutton = styled.button`
  margin-top: 140px;
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
  cursor: pointer;
  :hover {
    box-shadow: 0 0 5px purple;
  }
`;

const DetailInput = styled.input`
  margin-top: 30px;
  border: none;
  width: 250px;
  height: 40px;
  border-radius: 10px;
  padding: 0 12px;
  box-shadow: 0 0 5px purple;
  :hover {
    box-shadow: 0 0 15px purple;
  }
`;

const Detailbox = styled(motion.div)`
  position: relative;
  flex-direction: column;
  display: flex;
  white-space: nowrap;
  align-items: center;
  justify-content: flex-start;
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

const Detaildonebtn = styled.button`
  position: absolute;
  right: 30px;
  top: 30px;
  background-color: white;
  border: none;
  border-radius: 15px;
  width: 70px;
  height: 40px;
  font-weight: 700;
  cursor: pointer;
  color: black;
  font-weight: 900;
  box-shadow: 0 0 5px purple;
  :hover {
    box-shadow: 0 0 15px purple;
  }
`;

const Detailid = styled.h5`
  font-weight: 400;
  display: flex;
  flex-direction: column;
`;

const Detail = () => {
  let navigate = useNavigate();
  const state = useSelector((state) => state.reducer.todolist);

  const param = useParams();
  const dispatch = useDispatch();

  const initialstate = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
    star: true,
  };

  const [detailtodo, setDetailtodo] = useState(initialstate);

  const changehandler = (event) => {
    const { name, value } = event.target;
    //???????????? ??????????????? ???.
    //[name]??? title ????????? ?????? ????????? ????????? title??? ????????? ????????????.
    setDetailtodo({ ...detailtodo, [name]: value, id: param.id });
  };

  //?????????????????? ???????????? ????????? ??????????????? ?????? ?????????.
  const Deletecur = state.filter((todo) => {
    return todo.id !== param.id;
  });

  //?????????????????? ??????????????? ??????
  const Editcur = () => {
    if (detailtodo.title.trim() === "" || detailtodo.body.trim() === "") {
      toast("??? ?????? ????????????!");
    } else {
      dispatch(Editdetail([...Deletecur, detailtodo]));
      setEdit(!edit);
    }
  };

  console.log(state);

  //??????????????? ????????????
  const [edit, setEdit] = useState(true);

  //params??? ????????????...
  return (
    <>
      {state.map((todo) => {
        if (todo.id === param.id && edit === true) {
          return (
            <div>
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
                  <Detaildonebtn onClick={() => setEdit(!edit)}>
                    Edit
                  </Detaildonebtn>
                </Detailbox>
              </Layout>
            </div>
          );
        } else if (todo.id === param.id && edit == false) {
          return (
            <div>
              <Layout key={todo.id}>
                <Detailbox>
                  <Texttitle>????????????</Texttitle>
                  <DetailInput
                    maxLength="10"
                    onChange={changehandler}
                    type="text"
                    name="title"
                    placeholder={todo.title}
                    value={detailtodo.title}
                  ></DetailInput>
                  <DetailInput
                    onChange={changehandler}
                    type="text"
                    name="body"
                    placeholder={todo.body}
                    value={detailtodo.body}
                    style={{ height: "100px", verticalAlign: "top" }}
                  ></DetailInput>
                  <Detaildonebtn
                    type={"submit"}
                    onClick={() => {
                      Editcur();
                    }}
                  >
                    Done
                  </Detaildonebtn>
                </Detailbox>
                <StyledContainer />
              </Layout>
            </div>
          );
        }
      })}
    </>
  );
};

export default Detail;

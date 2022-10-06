import React from "react";
import { useState } from "react";
import Form from "../components/form/Form";
import List from "../components/list/List";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";

const Todolist = () => {

  let savedata = (localStorage.getItem('data') === null) ?
    [] : JSON.parse(localStorage.getItem('data'))

  const [list, setList] = useState(savedata);


  console.log(savedata)


  return (
    <Layout>
      <Header />
      <Form list={list} setList={setList} />
      <List list={list} setList={setList} />
    </Layout>
  );
};

export default Todolist;

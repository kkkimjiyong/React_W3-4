import React from "react";
import { useState } from "react";
import Form from "../components/form/Form";
import List from "../components/list/List";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import styled from "styled-components";

const Todolist = () => {
  const [list, setList] = useState([]);
  return (
    <Layout>
      <Header />
      <Form list={list} setList={setList} />
      <List list={list} setList={setList} />
    </Layout>
  );
};

export default Todolist;

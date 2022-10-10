import React from "react";
import Form from "./components/form/Form";
import List from "./components/list/List";
import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";

const Todolist = () => {

  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
};

export default Todolist;

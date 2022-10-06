import React from "react";
import styled from "styled-components";
import Post from "../post/post";

const Listbox = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 20px;
`;

const List = ({ list }) => {
  return (
    <Listbox>
      {list.map((post) => {
        return <Post post={post}></Post>;
      })}
    </Listbox>
  );
};

export default List;

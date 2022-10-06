import React from "react";
import styled from "styled-components";

const Postbox = styled.div`
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

const Post = ({ post }) => {
  return (
    <Postbox>
      <div>{post.title}</div>
      <div>{post.body}</div>
    </Postbox>
  );
};

export default Post;

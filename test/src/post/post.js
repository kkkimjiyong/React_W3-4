import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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

const Post = ({ post }) => {
  return (
    <Postbox variants={firstVariants} initial="start" animate="end">
      <div>{post.title}</div>
      <div>{post.body}</div>
    </Postbox>
  );
};

export default Post;

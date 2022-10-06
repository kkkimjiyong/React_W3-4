import React, { Children } from "react";
import styled from "styled-components";

const Layer = styled.div`
  width: 1200px;
  height: 800px;
  margin: auto;
  background-color: white;
`;

const Layout = ({ children }) => {
  return <Layer>{children}</Layer>;
};

export default Layout;

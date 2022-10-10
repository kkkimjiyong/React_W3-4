import React from "react";
import styled from "styled-components";

const Layoutbox = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Layoutbox>{children}</Layoutbox>
    </div>
  );
};

export default Layout;

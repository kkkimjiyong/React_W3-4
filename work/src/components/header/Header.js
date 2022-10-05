import React from "react";
import styled from "styled-components";

const Topnav = styled.h2`
  margin-left: 30px;
  color: grey;
`;

const Header = () => {
  return (
    <div>
      <Topnav>What did you do?</Topnav>
    </div>
  );
};

export default Header;

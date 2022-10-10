import React from "react";
import styled from "styled-components";
import Quoteapi from "../../../../Hooks/Quoteapi";

const Topnav = styled.h2`
  margin-left: 30px;
  color:  gray;
`;

const Navctn = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
`

const Wordlabel = styled.h6`
float: right;
margin-top: 35px;
font-size: xx-small;
font-weight: 100;
`

const Header = () => {

  //명언 커스텀훅
  const word = Quoteapi('https://api.adviceslip.com/advice')

  return (
    <Navctn>
      <Topnav>{word.advice}</Topnav>
      <Wordlabel>새로고침시, 명언이 업데이트됩니다.</Wordlabel>
    </Navctn>
  );
};

export default Header;

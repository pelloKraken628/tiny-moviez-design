import React from "react";
import styled from "styled-components";
import UserInfo from "./right/UserInfo";
import Watched from "./right/Watched";
const Container = styled.div`
  max-width: 350px;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.darkBlueLighter};
  border: 2px solid rgba(249, 249, 249, 0.1);
  padding-top: 48px;
  row-gap: 60px;
  padding-left: 35px;
  box-sizing: border-box;
`;

const Right = () => {
  return (
    <Container>
      <UserInfo />
      <Watched />
    </Container>
  );
};

export default Right;

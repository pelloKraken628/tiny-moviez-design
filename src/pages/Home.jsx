import React from "react";
import styled from "styled-components";
import Main from "../components/home/Main";
import Sidebar from "../components/home/Sidebar";
import FontStyles from "../components/tools/FontStyles";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.darkBlueDarker}; ;
`;

const Home = () => {
  return (
    <Container>
      <FontStyles />
      <Sidebar />
      <Main />
    </Container>
  );
};

export default Home;

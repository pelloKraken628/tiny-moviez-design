import React from "react";
import styled from "styled-components";
import Main from "../components/home/main";
import Right from "../components/home/right";
import Sidebar from "../components/home/Sidebar";
import FontStyles from "../components/tools/FontStyles";

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100vw;
  max-height: 100vh;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.darkBlueDarker};
`;
// TODO : Fixing Lato semi bold bug with sidebar item on clicks
const Home = () => {
  return (
    <Container>
      <FontStyles />
      <Sidebar />
      <Main />
      <Right />
    </Container>
  );
};

export default Home;

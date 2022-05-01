import React from "react";
import styled from "styled-components";
import Sidebar from "../components/home/Sidebar";
import FontStyles from "../components/tools/FontStyles";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
`;

const Home = () => {
  return (
    <Container>
      <FontStyles />
      <Sidebar />
    </Container>
  );
};

export default Home;

import React from "react";
import styled from "styled-components";
import TopRatedHeader from "./../tools/SlideHeader";
import TopRatedList from "./TopRatedList";
const Container = styled.div``;
const index = () => {
  const [direction, setDirection] = React.useState({
    direction: "",
  });
  return (
    <Container>
      <TopRatedHeader title="Top Rated" onSlide={setDirection} />
      <TopRatedList slideDirection={direction} />
    </Container>
  );
};

export default index;

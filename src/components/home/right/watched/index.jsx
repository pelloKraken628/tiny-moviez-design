import React from "react";
import styled from "styled-components";
import WatchedHeader from "../tools/SlideHeader";
import WatchedList from "./WatchedList";
const Container = styled.div``;
const Watched = () => {
  const [direction, setDirection] = React.useState({ direction: "" });
  return (
    <Container>
      <WatchedHeader onSlide={setDirection} title="Continue" />
      <WatchedList slideDirection={direction} />
    </Container>
  );
};

export default Watched;

import React, { useState } from "react";
import styled from "styled-components";
import SlideHeader from "../tools/SlideHeader";
import GenreList from "./GenreList";
const Container = styled.div``;
const Genre = () => {
  const [slideDirection, setSlideDirection] = useState({
    direction: "",
  });
  return (
    <Container>
      <SlideHeader title="Genres" onSlide={setSlideDirection} />
      <GenreList slideDirection={slideDirection} />
    </Container>
  );
};

export default Genre;

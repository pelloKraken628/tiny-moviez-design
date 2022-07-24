import PropTypes from "prop-types";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { handleSlide } from "../../../../utils/globalFunctions";
import { SlideWrapper } from "../watched/WatchedList";
const Container = styled.div`
  overflow: hidden;
`;
const SlideItemRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const SlideItemContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
`;
const SlideItem = styled.div`
  width: 208px;
  height: 97px;
  border-radius: 12px;
  background: linear-gradient(
      0deg,
      rgba(22, 24, 30, 0.7),
      rgba(22, 24, 30, 0.7)
    ),
    url(${(props) => props.background});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lato";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  color: ${({ theme }) => theme.white};
`;
const GenreList = ({ slideDirection }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const Genres = [
    {
      title: "Drama",
      img: "drama",
    },
    {
      title: "Sitcom",
      img: "sitcom",
    },
    {
      title: "Thriller",
      img: "thriller",
    },
    {
      title: "Superhero",
      img: "superhero",
    },
  ];

  useEffect(() => {
    handleSlide(slideDirection, slideIndex, setSlideIndex, genreRender.length);
  }, [slideDirection]);
  const genreRender = useMemo(
    () =>
      Array.from({ length: Math.ceil(Genres.length / 2) }, (_, idx) =>
        Genres.slice(idx * 2, idx * 2 + 2)
      ).map((genre, idx) => (
        <SlideItemRow key={idx}>
          {genre.map((item, idx) => (
            <SlideItemContainer key={idx}>
              <SlideItem
                // eslint-disable-next-line no-undef
                background={`${process.env.PUBLIC_URL}/assets/right/genre/${item.img}.jpg`}
              >
                {item.title}
              </SlideItem>
            </SlideItemContainer>
          ))}
        </SlideItemRow>
      )),
    []
  );
  return (
    <Container>
      <SlideWrapper slideIndex={slideIndex}>{genreRender}</SlideWrapper>
    </Container>
  );
};

GenreList.propTypes = {
  slideDirection: PropTypes.shape({
    direction: PropTypes.string.isRequired,
  }).isRequired,
};

export default GenreList;

import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { handleSlide } from "../../../../utils/globalFunctions";
import {
  Button,
  SlideItemSubTitle,
  SlideItemTitle,
  SlideWrapper,
} from "../watched/WatchedList";
const Container = styled.div`
  overflow: hidden;
`;
const SlideItemContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  box-sizing: border-box;
`;
const SlideItem = styled.div`
  width: 208px;
  border-radius: 12px;
  height: 127px;
  padding: 10px 10px 10px;
  box-sizing: border-box;
  background-image: linear-gradient(
      0deg,
      rgba(22, 24, 30, 0.7),
      rgba(22, 24, 30, 0.7)
    ),
    url(${(props) => props.background});
  background-size: cover;
`;
const SlideItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  &:first-of-type {
    padding-top: 11px;
  }
`;
const StyledButton = styled(Button)`
  backdrop-filter: blur(10px);
`;

const TopRatedList = ({ slideDirection }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const TopRated = [
    {
      title: "Supernatural",
      totalEpisode: 320,
      genres: ["Horror", "Fantasy"],
      img: "supernatural",
    },
    {
      title: "Rick and Morty",
      totalEpisode: 49,
      genres: ["Sitcom"],
      img: "rickAndMorty",
    },
  ];
  const topRatedRender = useMemo(
    () =>
      TopRated?.map((item, idx) => (
        <SlideItemContainer key={item.title + idx}>
          <SlideItem
            // eslint-disable-next-line no-undef
            background={`${process.env.PUBLIC_URL}/assets/right/topRated/${item.img}.jpg`}
          >
            <SlideItemTitle>{item.title}</SlideItemTitle>
            <SlideItemRow>
              <SlideItemSubTitle>{item.totalEpisode} Ep</SlideItemSubTitle>
              <SlideItemSubTitle>{item.genres.join(", ")}</SlideItemSubTitle>
            </SlideItemRow>
            <SlideItemRow>
              <StyledButton width={55}>+</StyledButton>
              <StyledButton width={125}>Watch</StyledButton>
            </SlideItemRow>
          </SlideItem>
        </SlideItemContainer>
      )),
    []
  );
  useEffect(() => {
    handleSlide(slideDirection, slideIndex, setSlideIndex, TopRated.length);
  }, [slideDirection]);
  return (
    <Container>
      <SlideWrapper slideIndex={slideIndex}>{topRatedRender}</SlideWrapper>
    </Container>
  );
};

TopRatedList.propTypes = {
  slideDirection: PropTypes.shape({
    direction: PropTypes.string,
  }).isRequired,
};

export default TopRatedList;

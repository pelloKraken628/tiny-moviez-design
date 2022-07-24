import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { handleSlide } from "../../../../utils/globalFunctions.js";
const Container = styled.div`
  overflow: hidden;
`;
export const SlideWrapper = styled.div`
  display: flex;
  gap: 30px;
  transform: translateX(${(props) => props.slideIndex * -240}px);
  transition: transform 350ms linear;
`;
const SlideItem = styled.div`
  width: 210px;
  height: 129px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  column-gap: 10px;
  border-radius: 12px;
  background-color: rgb(22, 24, 30);
  border: 1px solid ${({ theme }) => theme.border};
`;
const Left = styled.div`
  width: 55px;
`;
const Image = styled.img`
  width: 100%;
  height: 59px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;
export const Button = styled.button`
  border-radius: 8px;
  height: 40px;
  width: ${(props) => props.width}px;
  background-color: ${({ theme }) => theme.lowOpBtn};
  color: ${({ theme }) => theme.white};
  font-family: "Lato";
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 100%;
  cursor: pointer;
  border: 0;
  transition: all 350ms ease-in;
  &:hover {
    background-color: ${({ theme }) => theme.sky};
    color: ${({ theme }) => theme.dark};
  }
`;
const Right = styled.div``;
export const SlideItemTitle = styled.h3`
  font-family: "Lato";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  color: ${({ theme }) => theme.white};
  margin-bottom: 10px;
`;
export const SlideItemSubTitle = styled.h4`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  color: ${({ theme }) => theme.descriptions};
  margin-bottom: 15px;
`;
const ProgressContainer = styled.div`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.white};
  width: 100%;
  height: 3px;
  margin-bottom: 15px;
`;
const Progress = styled.div`
  border-radius: 8px;
  width: ${(props) => props.width}%;
  background-color: ${({ theme }) => theme.sky};
  height: 3px;
`;
const WatchedList = ({ slideDirection }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const Watched = [
    {
      title: "WandaVision",
      episodeLeft: 1,
      img: "wandaVision",
      stop: 86.4,
    },
    {
      title: "Harley Quinn",
      episodeLeft: 25,
      img: "harleyQuinn",
      stop: 50,
    },
  ];
  useEffect(() => {
    handleSlide(slideDirection, slideIndex, setSlideIndex, Watched.length);
  }, [slideDirection]);
  return (
    <Container>
      <SlideWrapper slideIndex={slideIndex}>
        {Watched.map((movie, idx) => (
          <SlideItem key={idx}>
            <Left>
              <Image
                // eslint-disable-next-line no-undef
                src={`${process.env.PUBLIC_URL}/assets/right/continue/${movie.img}.jpg`}
              />
              <Button width={55}>Drop</Button>
            </Left>
            <Right>
              <SlideItemTitle>{movie.title}</SlideItemTitle>
              <SlideItemSubTitle>
                {movie.episodeLeft} Episode left
              </SlideItemSubTitle>
              <ProgressContainer>
                <Progress width={movie.stop} />
              </ProgressContainer>
              <Button width={125}>Watch</Button>
            </Right>
          </SlideItem>
        ))}
      </SlideWrapper>
    </Container>
  );
};

WatchedList.propTypes = {
  slideDirection: PropTypes.shape({
    direction: PropTypes.string,
  }).isRequired,
};

export default WatchedList;

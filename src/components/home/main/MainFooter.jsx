import React, { useMemo } from "react";
import styled from "styled-components";
import StarIcon from "../../tools/icons/main/footer/StarIcon";
import HalfStarIcon from "../../tools/icons/main/footer/HalfStarIcon";
import AddIcon from "../../tools/icons/main/common/AddIcon";
const Container = styled.div`
  width: 95%;
  max-width: 770px;
  user-select: none;
`;
const Title = styled.h2`
  font-family: "Lato";
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  color: ${(props) => props.theme.white};
  margin-bottom: 30px;
  width: 100%;
`;
const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;
const Card = styled.div`
  width: 236px;
  height: 298px;
  background: linear-gradient(
      180deg,
      rgba(22, 24, 30, 0) 0%,
      rgba(22, 24, 30, 0.7) 61.28%
    ),
    linear-gradient(0deg, rgba(22, 24, 30, 0.4), rgba(22, 24, 30, 0.4)),
    url(${(props) => props.bgUrl});
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;
  padding-top: 21px;
  padding-bottom: 10px;
`;
const CardTop = styled.div`
  margin-left: 21px;
`;
const CardTitle = styled.h3`
  font-family: "Lato";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 100%;
  color: ${(props) => props.theme.white};
  margin-bottom: 12px;
`;
const StarsContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: flex-end;
`;
const CardBottom = styled.div`
  margin-left: 10px;
  width: calc(100% - 20px);
`;
const CardBottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;
  & > h4 {
    color: ${({ theme }) => theme.description};
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
  }
  &:first-of-type {
    margin-bottom: 15px;
  }
`;
const EpisodeInfo = styled.h4``;
const EpisodeTitle = styled.h4``;
const CardButton = styled.button`
  font-family: "Lato";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  border: none;
  background: ${({ theme }) => theme.lowOpBtn};
  backdrop-filter: blur(10px);
  border-radius: 15px;
  width: ${(props) => props.width};
  color: ${({ theme }) => theme.white};
  height: 56px;
  cursor: pointer;
  transition: all 550ms ease;
  &:hover {
    color: ${({ theme }) => theme.dark};
    background-color: ${({ theme }) => theme.sky};
    & path {
      stroke: ${({ theme }) => theme.dark};
    }
  }
`;
const MainFooter = () => {
  const popularMovies = useMemo(
    () => [
      {
        id: "1456c",
        name: "Loki",
        image: "loki",
        episode: 6,
        episodeName: "Superhero",
        review: 4.5,
      },
      {
        id: "145df",
        name: "Chernobyl",
        image: "chernobyl",
        episode: 5,
        episodeName: "Mini Series",
        review: 5,
      },
      {
        id: "14c5df5",
        name: "Rick and Morty",
        image: "rickAndMorty",
        episode: 49,
        episodeName: "Fantasy",
        review: 5,
      },
    ],
    []
  );
  const renderStars = (review) => {
    if (Number.isInteger(review)) {
      return Array.from({ length: review }, (_, idx) => <StarIcon key={idx} />);
    } else {
      const length = Math.floor(review);
      return [
        ...Array.from({ length }, (_, idx) => <StarIcon key={idx} />),
        <HalfStarIcon key={Math.random()} />,
      ];
    }
  };
  const preUrl = (name) =>
    // eslint-disable-next-line no-undef
    `${process.env.PUBLIC_URL}/assets/main/footer/${name}.jpg`;
  return (
    <Container>
      <Title>Popular on TinyMoviez</Title>
      <CardsContainer>
        {popularMovies.map((movie) => (
          <Card key={movie.id} bgUrl={preUrl(movie.image)}>
            <CardTop>
              <CardTitle>{movie.name}</CardTitle>
              <StarsContainer>{renderStars(movie.review)}</StarsContainer>
            </CardTop>
            <CardBottom>
              <CardBottomRow>
                <EpisodeInfo>{movie.episode} Ep</EpisodeInfo>
                <EpisodeTitle>{movie.episodeName}</EpisodeTitle>
              </CardBottomRow>
              <CardBottomRow>
                <CardButton width="57px">
                  <AddIcon />
                </CardButton>
                <CardButton width="150px">Watch</CardButton>
              </CardBottomRow>
            </CardBottom>
          </Card>
        ))}
      </CardsContainer>
    </Container>
  );
};

export default MainFooter;

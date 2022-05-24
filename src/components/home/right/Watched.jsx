import React from "react";
import styled from "styled-components";
import SlideLeftBtn from "../../tools/icons/right/SlideLeftBtn";
import SlideRightBtn from "../../tools/icons/right/SlideRightBtn";
const Container = styled.div``;
const Top = styled.div`
  margin-bottom: 30px;
  width: 100%;
  max-width: 280px;
  display: flex;
  align-items: center;
  column-gap: 20px;
`;
const Title = styled.h2`
  font-family: "Lato";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 100%;
  color: ${({ theme }) => theme.white};
`;
const BtnContainer = styled.div`
  display: flex;
  width: 36px;
  justify-content: space-between;
`;
const Button = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    & svg path {
      stroke-opacity: 1;
    }
  }
`;
const SeeMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
`;
const SeeMoreTitle = styled.h3`
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  color: ${({ theme }) => theme.lowOpTitles};
`;
const Watched = () => {
  return (
    <Container>
      <Top>
        <Title>Continue</Title>
        <BtnContainer>
          <Button>
            <SlideLeftBtn />
          </Button>
          <Button>
            <SlideRightBtn />
          </Button>
        </BtnContainer>
        <SeeMore>
          <SeeMoreTitle>See More</SeeMoreTitle>
          <Button>
            <SlideRightBtn />
          </Button>
        </SeeMore>
      </Top>
    </Container>
  );
};

export default Watched;

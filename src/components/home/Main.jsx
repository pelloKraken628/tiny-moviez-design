import React, { useId, useMemo, useState } from "react";
import styled from "styled-components";
import AddIcon from "../tools/icons/main/common/AddIcon";
import FilterIcon from "../tools/icons/main/top/FilterIcon";
import SearchIcon from "../tools/icons/main/top/SearchIcon";
import ArrowLeftIcon from "../tools/icons/main/slider/ArrowLeftIcon";
import ArrowRightIcon from "../tools/icons/main/slider/ArrowRightIcon";
import MainFooter from "./main/MainFooter";

const Container = styled.div`
  flex: 3.68;
  max-width: 906px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
  padding-bottom: 48px;
  row-gap: 60px;
  color: ${(props) => props.theme.white}; ;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  max-width: 770px;
  gap: 20px;
  flex-wrap: wrap-reverse;
`;
const TopCategory = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 46px;
  row-gap: 10px;
  flex-wrap: wrap;
  align-items: center;
`;
const TopCategoryItem = styled.h2`
  height: 100%;
  font-family: "Lato", "sans-serif";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: color 250ms ease-out;
  ::after {
    transition: width 250ms ease-out;
    position: absolute;
    content: "";
    width: ${(props) => (props.selected ? "calc( 100% + 8px)" : 0)};
    height: 4px;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 92px;
    background-color: ${(props) => props.theme.sky};
  }
  color: ${(props) => (props.selected ? props.theme.sky : props.theme.white)};
  &:hover {
    color: ${(props) => props.theme.sky};
    ::after {
      width: calc(100% + 8px);
    }
  }
`;
const SearchContainer = styled.form`
  position: relative;
  border-radius: 12px;
  background-color: ${(props) => props.theme.darkBlueLighter};
  border: 1px solid
    ${(props) => (props.active ? props.theme.sky : props.theme.border)};
  width: 95%;
  &:hover {
    border: 1px solid ${(props) => props.theme.sky};
  }
  max-width: 315px;
  transition: border 350ms linear;
`;

const SearchBar = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-family: "Lato", "sans-serif";
  font-style: normal;
  font-weight: 500;
  margin-left: 20%;
  color: rgba(249, 249, 249, 0.67);
  padding: 16px 0;
  font-size: 18px;
  line-height: 24px;
  transition: all 350ms ease-in;
  ::placeholder {
    transition: all 350ms ease-in 700ms;
    font-size: 18px;
    line-height: 24px;
    font-family: "Lato", "sans-serif";
    font-style: normal;
    font-weight: 500;
    color: rgba(249, 249, 249, 0.67);
  }
  :focus {
    color: ${(props) => props.theme.sky};
    ::placeholder {
      color: ${(props) => props.theme.sky};
    }
  }
`;

const Slider = styled.div`
  width: 95%;
  max-width: 770px;
  min-height: 350px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  row-gap: 60px;
  padding: 0 20px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  user-select: none;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform 1.5s ease;
  position: absolute;
  left: 0;
  transform: translateX(${(props) => props.slideIndex * -100}%);
`;
const Slide = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  background-image: linear-gradient(
      0deg,
      rgba(22, 24, 30, 0.5),
      rgba(22, 24, 30, 0.5)
    ),
    url(${(props) => props.bgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
`;
const SliderTitle = styled.h2`
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 100%;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #f9f9f9;
  width: calc(100% - 80px);
  margin: 40px auto 0;
`;
const SliderBtnContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
`;
const SliderButton = styled.button`
  width: 50px;
  border: none;
  background-color: ${(props) => props.theme.lowOpBtn};
  backdrop-filter: blur(10px);
  border-radius: 15px;
  cursor: pointer;
  padding: 0;
  transition: background 350ms ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.sky};
    & > svg > path {
      stroke: ${({ theme }) => theme.dark};
    }
  }
`;
const SliderFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  margin-bottom: 20px;
`;
const SliderFooterBtn = styled.button`
  border: none;
  background: ${(props) => props.theme.lowOpBtn};
  backdrop-filter: blur(10px);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 15px;
  width: ${(props) => props.width}px;
  height: 100%;
  cursor: pointer;
  transition: background-color 350ms ease-in;
  &:hover {
    background-color: ${(props) => props.theme.sky};
    & > svg > path,
    & > h3 {
      color: ${(props) => props.theme.dark};
      stroke: ${(props) => props.theme.dark};
    }
  }
`;
const SliderFooterBtnLabel = styled.h3`
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 100%;
  transition: color 550ms ease-out;
  color: ${(props) => props.theme.white};
`;
const SliderProgressContainer = styled.div`
  width: 74px;
  height: 26px;
  background: ${(props) => props.theme.lowOpBtn};
  backdrop-filter: blur(10px);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const SliderProgressItem = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ selected, theme }) =>
    selected ? theme.sky : theme.white};
  cursor: pointer;
  transition: all 550ms ease-out;
  &:hover {
    background-color: ${({ theme }) => theme.dark};
  }
`;

const Main = () => {
  const [searching, setSearching] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const handleSearch = (value) => setSearching(value);
  const handleChangeCategory = (categoryName) =>
    setCurrentCategory(categoryName);
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideManualy = (index) => {
    setCurrentSlide(index);
  };
  const slideId = useId();
  const categories = useMemo(() => ["Movies", "TV Shows", "Anime"], []);
  const categoryId = useId();
  const sliderItem = useMemo(() => ["theCrown", "theCrown", "theCrown"], []);
  const sliderItemUrl = (name) =>
    `${process.env.PUBLIC_URL}/assets/main/slider/${name}.jpg`;
  return (
    <Container>
      <Top>
        <TopCategory>
          {categories.map((category, idx) => (
            <TopCategoryItem
              key={`${categoryId}${idx}`}
              onClick={() => handleChangeCategory(category)}
              selected={currentCategory === category}
            >
              {category}
            </TopCategoryItem>
          ))}
        </TopCategory>
        <SearchContainer active={searching}>
          <SearchIcon active={searching} />
          <FilterIcon active={searching} />
          <SearchBar
            onFocus={() => handleSearch(true)}
            onBlur={() => handleSearch(false)}
            type="text"
            placeholder="Search"
          />
        </SearchContainer>
      </Top>
      <Slider>
        <Wrapper slideIndex={currentSlide}>
          {sliderItem.map((name, idx) => (
            <Slide key={idx} bgUrl={sliderItemUrl(name)}>
              <SliderTitle>The Crown</SliderTitle>
            </Slide>
          ))}
        </Wrapper>
        <SliderBtnContainer>
          <SliderButton
            onClick={() =>
              currentSlide > 0 && handleSlideManualy(currentSlide - 1)
            }
          >
            <ArrowLeftIcon />
          </SliderButton>
          <SliderButton
            onClick={() =>
              currentSlide < 2 && handleSlideManualy(currentSlide + 1)
            }
          >
            <ArrowRightIcon />
          </SliderButton>
        </SliderBtnContainer>
        <SliderFooter>
          <SliderFooterBtn width={160}>
            <AddIcon />
            <SliderFooterBtnLabel>Watchlist</SliderFooterBtnLabel>
          </SliderFooterBtn>
          <SliderProgressContainer>
            {Array(3)
              .fill(0)
              .map((_, idx) => (
                <SliderProgressItem
                  key={slideId + idx}
                  selected={idx === currentSlide}
                  onClick={() => handleSlideManualy(idx)}
                />
              ))}
          </SliderProgressContainer>
          <SliderFooterBtn width={190}>
            <SliderFooterBtnLabel>Watch Now</SliderFooterBtnLabel>
          </SliderFooterBtn>
        </SliderFooter>
      </Slider>
      <MainFooter />
    </Container>
  );
};

export default Main;

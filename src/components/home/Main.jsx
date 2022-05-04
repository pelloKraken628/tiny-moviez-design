import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "../tools/icons/main/SearchIcon";
import FilterIcon from "../tools/icons/main/FilterIcon";
import { keyframes } from "styled-components";

const scale = keyframes`
from {
  transform: scale(0);
}
to {
  transform: scale(1);
}
`;
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
  flex-wrap: wrap;
  align-items: center;
`;
const TopCategoryItem = styled.h2`
  font-family: "Lato", "sans-serif";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  cursor: pointer;
  position: relative;
  transition: color 250ms ease-out;
  ::after {
    position: absolute;
    animation: ${scale} 1000ms linear;
    content: "";
    transform: scale(0);
    height: 4px;
    width: calc(100% + 8px);
    bottom: -14px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 92px;
  }
  &:hover {
    color: ${(props) => props.theme.sky};
    ::after {
      background-color: ${(props) => props.theme.sky};
    }
  }
`;
const SearchContainer = styled.form`
  position: relative;
  border-radius: 12px;
  background-color: ${(props) => props.theme.darkBlueLighter};
  border: 1px solid
    ${(props) => (props.active ? props.theme.sky : props.theme.darkBlueDarker)};
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

const Main = () => {
  const [active, setActive] = useState(false);
  const handleActivate = (val) => setActive(val);
  return (
    <Container>
      <Top>
        <TopCategory>
          <TopCategoryItem>Movies</TopCategoryItem>
          <TopCategoryItem>TV Shows</TopCategoryItem>
          <TopCategoryItem>Anime</TopCategoryItem>
        </TopCategory>
        <SearchContainer active={active}>
          <SearchIcon active={active} />
          <FilterIcon active={active} />
          <SearchBar
            onFocus={() => handleActivate(true)}
            onBlur={() => handleActivate(false)}
            type="text"
            placeholder="Search"
          />
        </SearchContainer>
      </Top>
    </Container>
  );
};

export default Main;


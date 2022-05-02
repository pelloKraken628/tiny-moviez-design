import React from "react";
import styled from "styled-components";
const Container = styled.div`
  flex: 3.68;
  max-width: 906px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
  padding-bottom: 48px;
  row-gap: 60px;
  color: #f9f9f9;
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
`;
const SearchContainer = styled.form`
  position: relative;
  border-radius: 12px;
  background-color: #21242d;
  border: 1px solid rgba(249, 249, 249, 0.1);
  width: 95%;
  max-width: 315px;
`;
const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 25px;
  top: 50%;
  transform: translateY(-50%);
`;
const FilterIcon = styled.img`
  width: 20px;
  height: 24px;
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
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
  ::placeholder {
    font-size: 18px;
    line-height: 24px;
    font-family: "Lato", "sans-serif";
    font-style: normal;
    font-weight: 500;
    color: rgba(249, 249, 249, 0.67);
  }
  :focus {
    ::placeholder {
      color: #00b9ae;
    }
  }
`;

const Main = () => {
  const imgBaseUrl = process.env.PUBLIC_URL + "/assets/main/";
  return (
    <Container>
      <Top>
        <TopCategory>
          <TopCategoryItem>Movies</TopCategoryItem>
          <TopCategoryItem>TV Shows</TopCategoryItem>
          <TopCategoryItem>Anime</TopCategoryItem>
        </TopCategory>
        <SearchContainer>
          <SearchIcon src={`${imgBaseUrl}/search.svg`} />
          <FilterIcon src={`${imgBaseUrl}/filter.svg`} />
          <SearchBar type="text" placeholder="Search" />
        </SearchContainer>
      </Top>
    </Container>
  );
};

export default Main;

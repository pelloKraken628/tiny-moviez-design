import React from "react";
import styled from "styled-components";
const Svg = styled.svg``;
const Path = styled.path`
  transition: all 550ms ease-out;
`;
const AddIcon = () => {
  return (
    <Svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M10.5 2V10.5M10.5 19V10.5M10.5 10.5H19H2"
        stroke="#F9F9F9"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default AddIcon;

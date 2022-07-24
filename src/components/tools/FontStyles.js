import { createGlobalStyle } from "styled-components";

// eslint-disable-next-line no-undef
const LatoSemiBoldUrl = `${process.env.PUBLIC_URL}/fonts/lato.semibold.ttf`;
const FontStyles = createGlobalStyle`
@font-face {
  font-family: "Lato SemiBold";
  src: url(${LatoSemiBoldUrl});
}
`;
export default FontStyles;

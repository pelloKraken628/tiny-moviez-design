import { createGlobalStyle } from "styled-components";

const FontStyles = createGlobalStyle`
@font-face {
  font-family: "Lato SemiBold";
  // eslint-disable-next-line no-undef
  src: url(${process.env.PUBLIC_URL}/fonts/lato.semibold.ttf);
}
`;
export default FontStyles;

import { pxToRem } from "./../../utils/pxToRem";
import styled from "styled-components";

export const Main = styled.main`
    /* 120px navbar + 75px padding*/
    padding-left: ${pxToRem(195)};
    padding-right: ${pxToRem(75)};
`;

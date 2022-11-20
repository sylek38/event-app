import { pxToRem } from "./../../utils/pxToRem";
import styled from "styled-components";

export const Main = styled.main`
    /* 120px navbar + 75px padding*/
    padding: 0 ${pxToRem(75)} ${pxToRem(100)} ${pxToRem(195)};
`;

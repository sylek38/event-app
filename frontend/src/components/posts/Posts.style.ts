import { pxToRem } from "./../../utils/pxToRem";
import styled from "styled-components";

export const Posts = styled.div`
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: space-around;
    /* gap = 50px + 20px (half of the button) */
    gap: calc(${pxToRem(50)} + ${pxToRem(20)}) ${pxToRem(50)};
`;

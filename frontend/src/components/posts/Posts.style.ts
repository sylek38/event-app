import { pxToRem } from "./../../utils/pxToRem";
import styled from "styled-components";

export const Posts = styled.div`
    display: flex;
    flex-direction: row;
    /* vertical gap = gap + half of button */
    gap: calc(${pxToRem(50)} +${pxToRem(20)}) ${pxToRem(50)};
`;

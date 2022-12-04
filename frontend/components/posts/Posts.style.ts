import { pxToRem } from "./../../utils/pxToRem";
import styled from "styled-components";

export const Posts = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: ${pxToRem(75)} ${pxToRem(25)};
`;

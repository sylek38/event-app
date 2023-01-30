import { pxToRem } from "./../../utils/pxToRem";
import styled from "styled-components";

export const Posts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: ${pxToRem(75)} ${pxToRem(25)};
    padding-top: 3rem;
`;

export const NotFound = styled.div`
    margin: auto;
    text-align: center;
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 0;

    > span:first-child {
        font-size: 1.25rem;
        font-weight: 700;
    }

    > p {
        margin: ${pxToRem(4)} 0 ${pxToRem(10)} 0;
    }
`;

export const LoaderContainer = styled.div`
    margin: auto;
    width: fit-content;
    padding: 2rem 0;
`;

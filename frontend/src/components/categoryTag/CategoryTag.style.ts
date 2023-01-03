import { pxToRem } from "./../../utils/pxToRem";
import styled from "styled-components";

export const CategoryTag = styled.div`
    display: flex;
    align-items: center;
    padding: ${pxToRem(6)} 1rem;
    color: var(--color-black);
    background-color: var(--color-white);
    border-radius: ${pxToRem(12)};
    width: fit-content;

    > span {
        font-size: ${pxToRem(12)};
        font-weight: bold;
    }

    > svg {
        width: 1rem;
        height: 1rem;
        margin-left: 1rem;
    }
`;

import { pxToRem } from "./../../utils/pxToRem";
import styled from "styled-components";

export const CategoryTag = styled.span`
    padding: ${pxToRem(6)} 1rem;
    font-size: ${pxToRem(12)};
    background-color: var(--color-white);
    color: var(--color-black);

    > svg {
        width: 1rem;
        height: 1rem;
    }
`;

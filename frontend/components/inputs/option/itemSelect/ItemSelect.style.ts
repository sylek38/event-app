import { pxToRem } from "./../../../../utils/pxToRem";
import styled from "styled-components";

export const Label = styled.label`
    display: flex;
    padding: 0.5rem 0;
    color: inherit;
    border-radius: ${pxToRem(25)};
    cursor: pointer;

    > input {
        /* margin-right: 0.5rem; */
        /* visibility: hidden; */
        display: none;
    }

    &:hover {
        background-color: var(--checkbox-label--hover);
    }
`;

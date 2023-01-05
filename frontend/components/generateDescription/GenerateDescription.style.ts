import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";

export const Error = styled.div`
    min-height: 1rem;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: ${pxToRem(12)};
    color: var(--error-color);
    margin-top: 0.25rem;

    > svg {
        margin-right: ${pxToRem(10)};
    }
`;

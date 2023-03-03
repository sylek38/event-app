import { pxToRem } from "./../../utils/pxToRem";
import styled from "styled-components";

export const CategoryTag = styled.div`
    display: flex;
    align-items: center;
    gap: ${pxToRem(10)};
    width: fit-content;
    padding: ${pxToRem(6)} 1rem;
    font-size: ${pxToRem(11)};
    font-weight: 600;
    background-color: var(--primary-green-color--light);
    color: var(--primary-background);
    border-radius: ${pxToRem(12)};

    > svg {
        width: 1rem;
        height: 1rem;
    }
`;

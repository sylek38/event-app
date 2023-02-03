import { pxToRem } from "../../../../utils/pxToRem";
import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;

export const Button = styled.button<{ active: boolean }>`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--secondary-background);
    color: var(--color-white);
    border: none;
    border-radius: ${pxToRem(25)};
    padding: ${pxToRem(5)} 1rem;
    font-size: ${pxToRem(12)};
    font-weight: 700;
    cursor: pointer;
    border: 2px solid var(--color-white);
    transition: 0.25s;

    ${({ active }) =>
        active &&
        css`
            background-color: var(--color-white);
            color: var(--primary-background);
        `};
`;

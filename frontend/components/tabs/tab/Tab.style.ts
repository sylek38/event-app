import { pxToRem } from "./../../../utils/pxToRem";
import styled, { css } from "styled-components";

const tabStyle = (selected: boolean) => css`
    display: block;
    height: 2.5rem;
    max-width: fit-content;
    padding: ${pxToRem(10)} ${pxToRem(30)};
    border: none;
    background-color: inherit;
    color: var(--color-white);
    font-size: 1rem;
    font-weight: 600;
    transition: 0.25s;
    border-bottom: 2px solid var(--tertiary-background);

    ${!selected &&
    css`
        &:hover {
            background-color: var(--secondary-background--hover);
            cursor: pointer;
        }
    `}

    ${selected &&
    css`
        border-bottom-color: var(--primary-green-color);
    `}
`;

export const LinkTab = styled.a<{ isSelected: boolean }>`
    ${({ isSelected }) => tabStyle(isSelected)}
`;

export const ButtonTab = styled.button<{ isSelected: boolean }>`
    ${({ isSelected }) => tabStyle(isSelected)}
`;

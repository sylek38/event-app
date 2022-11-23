import styled, { css } from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(10)};
    width: 100%;
`;

export const Label = styled.label`
    font-size: ${pxToRem(12)};
    color: var(--secondary-text);
`;

export const DateInput = styled.input<{
    isError: boolean;
    disabled?: boolean;
}>`
    padding: ${pxToRem(12)} ${pxToRem(20)};
    font-size: ${pxToRem(14)};
    color: var(--color-white);
    background-color: var(--primary-background);
    border-radius: ${pxToRem(50)};
    transition: 0.5s;
    border: none;
    color-scheme: dark;

    &:focus-visible {
        outline: none;
    }

    &::-webkit-calendar-picker-indicator {
        fill: red;
    }

    ${({ isError }) =>
        isError &&
        css`
            border: 1px solid var(--error-color);
        `}
`;

export const Error = styled.div`
    display: flex;
    align-items: center;
    font-size: ${pxToRem(12)};
    color: var(--error-color);

    > svg {
        margin-right: ${pxToRem(10)};
    }
`;

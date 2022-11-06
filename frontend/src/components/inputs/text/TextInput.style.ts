import { pxToRem } from "./../../../../utils/pxToRem";
import styled, { css } from "styled-components";

export const Container = styled.div<{ fullWidth?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(10)};

    ${({ fullWidth }) =>
        fullWidth &&
        css`
            width: 100%;
        `}
`;

export const Label = styled.label`
    font-size: ${pxToRem(12)};
    color: var(--secondary-text);
`;

export const TextInput = styled.input<{
    isError: boolean;
    disabled?: boolean;
}>`
    all: unset;
    padding: ${pxToRem(12)} ${pxToRem(20)};
    font-size: ${pxToRem(14)};
    color: var(--color-white);
    background-color: var(--primary-background);
    border-radius: ${pxToRem(50)};
    transition: 0.5s;

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

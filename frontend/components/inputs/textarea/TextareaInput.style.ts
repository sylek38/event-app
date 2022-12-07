import { pxToRem } from "../../../utils/pxToRem";
import styled, { css } from "styled-components";

export const Container = styled.div<{ fullWidth?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(10)};
    flex-shrink: 1;
    max-width: 300px;
    width: 100%;

    ${({ fullWidth }) =>
        fullWidth &&
        css`
            width: 100%;
        `};
`;

export const Label = styled.label`
    font-size: ${pxToRem(12)};
    color: var(--secondary-text);
`;

export const TextareaInput = styled.textarea<{
    isError: boolean;
    disabled?: boolean;
    dark?: boolean;
}>`
    all: unset;
    padding: ${pxToRem(12)} ${pxToRem(20)};
    font-size: ${pxToRem(12)};
    color: var(--color-white);
    background-color: ${({ dark }) =>
        dark ? "var(--container-background)" : "var(--secondary-background)"};
    border-radius: ${pxToRem(30)};
    transition: 0.5s;
    box-shadow: 6px 6px 30px rgba(0, 0, 0, 0.25);

    ${({ isError }) =>
        isError &&
        css`
            border: 1px solid var(--error-color);
        `}
`;

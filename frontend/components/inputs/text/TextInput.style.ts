import { pxToRem } from "../../../utils/pxToRem";
import styled, { css } from "styled-components";

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

export const TextInput = styled.input<{
    isError: boolean;
    disabled?: boolean;
    dark?: boolean;
}>`
    all: unset;
    padding: ${pxToRem(12)} ${pxToRem(20)};
    font-size: ${pxToRem(14)};
    color: var(--color-white);
    background-color: ${({ dark }) =>
        dark ? "var(--container-background)" : "var(--secondary-background)"};
    border-radius: ${pxToRem(50)};
    transition: 0.5s;
    box-shadow: 6px 6px 30px rgba(0, 0, 0, 0.25);

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

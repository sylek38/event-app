import { pxToRem } from "../../../utils/pxToRem";
import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 12.5rem;
    width: 100%;
    height: ${pxToRem(72)};
`;

export const Label = styled.label`
    font-size: ${pxToRem(12)};
    color: var(--secondary-text);
    margin-bottom: ${pxToRem(6)};
    line-height: 1;
`;

export const TextInput = styled.input<{
    isError: boolean;
    disabled?: boolean;
    dark?: boolean;
}>`
    all: unset;
    padding: ${pxToRem(10)} ${pxToRem(20)};
    font-size: ${pxToRem(14)};
    color: var(--color-white);
    background-color: ${({ dark }) =>
        dark ? "var(--primary-background)" : "var(--secondary-background)"};
    border-radius: ${pxToRem(50)};
    transition: 0.5s;
    line-height: ${pxToRem(20)};

    box-shadow: 6px 6px 30px rgba(0, 0, 0, 0.25);

    ${({ isError }) =>
        isError &&
        css`
            outline: 1px solid var(--error-color);
        `}
`;

export const Error = styled.div`
    min-height: 1rem;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: ${pxToRem(12)};
    line-height: ${pxToRem(16)};
    color: var(--error-color);
    margin-top: 0.25rem;

    > svg {
        margin-right: ${pxToRem(10)};
    }
`;

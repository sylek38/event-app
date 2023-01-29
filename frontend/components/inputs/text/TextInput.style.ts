import { pxToRem } from "./../../../utils/pxToRem";
import styled, { css } from "styled-components";

export const Container = styled.div<{ withoutDesc?: boolean }>`
    display: flex;
    flex-direction: column;
    /* min-width: 12.5rem; */
    width: 100%;
    height: ${({ withoutDesc }) => (withoutDesc ? "2.5rem" : `${pxToRem(72)}`)};
`;

export const Label = styled.label`
    font-size: ${pxToRem(12)};
    color: var(--secondary-text);
    margin-bottom: ${pxToRem(10)};
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
    color: var(--secondary-text);
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

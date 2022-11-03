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
    fullWidth?: boolean;
}>`
    all: unset;
    padding: ${pxToRem(12)} ${pxToRem(20)};
    font-size: 14px;
    color: var(--color-white);
    background-color: var(--primary-background);
    border-radius: ${pxToRem(50)};
`;

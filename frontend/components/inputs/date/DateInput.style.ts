import styled, { css } from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div<{ withoutDesc?: boolean }>`
    display: flex;
    flex-direction: column;
    /* gap: ${pxToRem(10)}; */
    width: 100%;
    height: ${({ withoutDesc }) => (withoutDesc ? "2.5rem" : `${pxToRem(72)}`)};
`;

export const Label = styled.label`
    font-size: ${pxToRem(12)};
    color: var(--secondary-text);
    margin-bottom: ${pxToRem(10)};
    line-height: 1;
`;

export const DateInput = styled.input<{
    isError: boolean;
    disabled?: boolean;
    dark?: boolean;
}>`
    padding: ${pxToRem(10)} ${pxToRem(20)};
    height: 100%;
    font-size: ${pxToRem(14)};
    color: var(--secondary-text);
    background-color: ${({ dark }) =>
        dark ? "var(--primary-background)" : "var(--secondary-background)"};
    border-radius: ${pxToRem(50)};
    transition: 0.5s;
    border: none;
    color-scheme: dark;
    line-height: ${pxToRem(20)};
    box-shadow: 6px 6px 30px rgba(0, 0, 0, 0.25);

    &:focus-visible {
        outline: none;
    }

    &::-webkit-calendar-picker-indicator {
        fill: red;
    }

    ${({ isError }) =>
        isError &&
        css`
            outline: 1px solid var(--error-color);
        `}
`;

// export const Error = styled.div`
//     display: flex;
//     align-items: center;
//     font-size: ${pxToRem(12)};
//     color: var(--error-color);

//     > svg {
//         margin-right: ${pxToRem(10)};
//     }
// `;

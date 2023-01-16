import { pxToRem } from "./../../../../utils/pxToRem";
import styled, { css } from "styled-components";

export const Wrapper = styled.button<{ dark?: boolean; isError?: boolean }>`
    display: block;
    width: 100%;
    min-width: 12rem;
    border-radius: var(--radius);
    border: 1px solid var(--text-input-border);
    height: 2.5rem;
    font-family: inherit;
    font-size: ${pxToRem(14)};
    display: flex;
    align-items: center;
    padding: ${pxToRem(10)} 1.25rem;
    border-radius: ${pxToRem(50)};
    text-align: left;
    color: var(--secondary-text);
    background-color: ${({ dark }) =>
        dark ? "var(--primary-background)" : "var(--secondary-background)"};
    box-shadow: 6px 6px 30px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    line-height: 1.25rem;

    ${({ isError }) =>
        isError &&
        css`
            outline: 1px solid var(--error-color);
        `}

    > svg {
        margin-left: auto;
        width: 1rem;
        height: 1rem;
        color: inherit;
        flex-shrink: 0;
        color: var(--color-white);
    }

    > span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`;

export const Loading = styled.span`
    margin-left: 0.5rem;
`;

export const Desc = styled.span`
    color: var(--light-text);
`;

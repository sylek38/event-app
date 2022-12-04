import { pxToRem } from "./../../../utils/pxToRem";
import styled, { css } from "styled-components";

export const Container = styled.div<{
    fullWidth?: boolean;
    blackVariant?: boolean;
}>`
    position: relative;
    border-radius: 1.25rem;
    border: 2px solid transparent;

    -webkit-box-shadow: 6px 6px 30px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 6px 6px 30px rgba(0, 0, 0, 0.25);
    box-shadow: 6px 6px 30px rgba(0, 0, 0, 0.25);

    background-color: var(--secondary-background);
    font-size: var(--font-size-14);

    ${({ fullWidth }) =>
        fullWidth &&
        css`
            width: 100%;
        `}

    ${({ blackVariant }) =>
        blackVariant &&
        css`
            background-color: var(--container-backgroud);
        `}

    input:focus, input:focus+ button {
        color: var(--primary-text);
        ::placeholder {
            color: var(--primary-text);
            opacity: 1; /* Firefox */
        }
    }

    :focus-within {
        border: 2px solid white;
        color: var(--primary-text);
    }

    :active {
        border: 2px solid transparent;
    }
`;

export const Searchbar = styled.input`
    all: unset;
    padding: ${pxToRem(11)} ${pxToRem(30)} ${pxToRem(12)};
    color: var(--secondary-backround);
`;

export const Button = styled.button`
    //reset
    all: unset;
    position: absolute;
    top: -2px;
    right: 0;
    padding: ${pxToRem(11)} 1.25rem ${pxToRem(12)};
    border-radius: 1.25rem;
    display: inline-block;
    color: var(--secondary-text);
    :hover {
        cursor: pointer;
    }
`;

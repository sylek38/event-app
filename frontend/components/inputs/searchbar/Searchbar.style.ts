import { pxToRem } from "../../../utils/pxToRem";
import styled, { css } from "styled-components";

export const Container = styled.div<{
    fullWidth?: boolean;
    blackVariant?: boolean;
}>`
    position: relative;
    display: flex;
    flex-direction: row;
    gap: ${pxToRem(10)};
    border-radius: 1.25rem;
    border: 2px solid transparent;

    -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);

    background-color: var(--secondary-background);
    font-size: var(--font-size-14);

    width: 19rem;

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
    padding: ${pxToRem(8)} 1.25rem;
    color: var(--secondary-text);
    width: 70%;
`;

export const Button = styled.button`
    //reset
    all: unset;
    position: absolute;
    top: -2px;
    right: 0;
    padding: ${pxToRem(10)} 1.25rem;
    border-radius: 1.25rem;
    display: inline-block;
    color: var(--secondary-text);
    :hover {
        cursor: pointer;
    }
`;

export const Error = styled.div``;

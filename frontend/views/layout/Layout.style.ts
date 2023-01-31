import { pxToRem } from "./../../utils/pxToRem";
import styled, { css } from "styled-components";

export const Main = styled.main`
    /* TODO: We should hide navbar under 619px */
    /* TODO: figure out breakpoints, these are an idea for now */

    padding: 0 2rem 0 calc(2rem + 6rem);
    display: flex;
    justify-content: center;

    @media screen and (max-width: 619px) {
        padding-left: 0;
        padding: 0 1rem;
    }
`;

export const Container = styled.div<{
    withoutBackground?: boolean;
    withoutTopPadding?: boolean;
    small?: boolean;
}>`
    max-width: ${({ small }) =>
        small ? `${pxToRem(686)}` : ` ${pxToRem(1080)}`};

    width: 100%;
    background-color: var(--secondary-background);
    padding: ${({ withoutTopPadding }) =>
        withoutTopPadding
            ? `0 ${pxToRem(30)} ${pxToRem(30)} ${pxToRem(30)}`
            : `${pxToRem(30)}`};
    border-radius: ${pxToRem(25)};
    color: var(--color-white);

    @media screen and (max-width: 619px) {
        padding: 1rem;
    }

    ${({ withoutBackground }) =>
        withoutBackground &&
        css`
            background-color: initial;
            @media screen and (max-width: 619px) {
                padding: 0;
            }
        `}
`;

export const Heading = styled.div<{ header?: boolean }>`
    ${({ header }) =>
        header &&
        css`
            margin-bottom: ${pxToRem(50)};
        `}

    > h1 {
        margin-bottom: ${pxToRem(10)};
    }
`;

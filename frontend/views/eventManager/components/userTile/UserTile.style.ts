import styled, { css } from "styled-components";
import { pxToRem } from "../../../../utils/pxToRem";

export const Tile = styled.li<{ border?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: ${pxToRem(10)} ${pxToRem(30)};
    background-color: var(--container-background);
    border-radius: ${pxToRem(25)};
    width: 100%;

    ${({ border }) =>
        border &&
        css`
            border: 2px solid var(--primary-green-color);
        `}

    @media screen and (max-width: 799px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

export const User = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    text-align: center;

    @media screen and (max-width: 799px) {
        flex-direction: column;
        gap: 0.5rem;
    }

    span {
        display: flex;
        font-size: ${pxToRem(14)};
        line-height: 1.2rem;
        overflow-wrap: break-word;
    }
`;

export const ButtonsSection = styled.div`
    display: flex;
    justify-content: center;
    gap: 2.5rem;
    flex-wrap: wrap;
    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        button:nth-child(1) {
            background-color: var(--secondary-background);
            color: var(--secondary-text);
        }
    }
`;

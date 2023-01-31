import { pxToRem } from "./../../../utils/pxToRem";
import styled from "styled-components";

export const Container = styled.div``;

export const RequestsList = styled.ul`
    display: flex;
    flex-direction: column;

    flex-wrap: wrap;
    width: 100%;
    gap: 1rem;

    @media screen and (max-width: 799px) {
        gap: 1rem;
    }
`;

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: ${pxToRem(10)} ${pxToRem(30)};
    background-color: var(--container-background);
    border-radius: ${pxToRem(25)};

    width: 100%;

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
        /* word-break: break-all; */
    }

    /* display: block;
    margin: ${pxToRem(10)} 0 ${pxToRem(20)};

    font-size: 1rem;
    font-weight: bold;
    color: var(--color-white);

    line-height: 1.5rem;
    max-height: 3rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis; */
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

        &:nth-child(2) {
            button:nth-child(1) {
                color: var(--secondary-text);
            }
        }
    }

    /* @media screen and (max-width: 799px) {
        flex-direction: column;
        gap: 0.5rem;
    } */
`;

import { pxToRem } from "./../../../utils/pxToRem";
import styled, { css } from "styled-components";

export const Post = styled.div<{ width: number; $padding?: number }>`
    max-width: ${pxToRem(750)};
    margin: auto;
    background-color: var(--secondary-background);
    border-radius: ${pxToRem(24)};
    box-shadow: 0 0 1.5em var(--box-shadow--black);

    + div {
        margin-top: 3rem;
    }
    /* 
    ${({ $padding }) =>
        $padding &&
        css`
            padding: ${$padding};
        `} */
`;

export const BackgroundContainer = styled.div`
    position: relative;
    border-bottom: ${pxToRem(3)} solid var(--color-white);
    height: ${pxToRem(250)};

    > svg {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: ${pxToRem(24)} ${pxToRem(24)} 0 0;
        background-color: var(--color-white);
    }
`;

export const UserInfo = styled.div`
    position: absolute;
    top: ${pxToRem(-43)};
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;

    > span {
        color: var(--color-white);
    }
`;

export const Content = styled.div`
    position: relative;
    padding: ${pxToRem(66)} ${pxToRem(48)} ${pxToRem(30)} ${pxToRem(48)};

    @media screen and (max-width: 619px) {
        padding: 2rem 1rem 1rem;
    }
`;

export const Title = styled.span`
    display: block;
    height: 3rem;
    margin-top: ${pxToRem(10)};
    margin-bottom: ${pxToRem(20)};
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--color-white);

    line-height: 1.5rem;
    max-height: 3rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
`;

export const Section = styled.div`
    margin-top: ${pxToRem(60)};

    > p + p {
        margin-top: 1rem;
    }
`;

export const Description = styled.p`
    color: var(--color-light-gray);
`;

export const DetailsItem = styled.div`
    display: flex;
    color: var(--color-white);
`;

export const DetailsSection = styled.div`
    margin-top: ${pxToRem(60)};

    > div {
        display: flex;

        > div {
            flex: 1;
            min-width: 280px;

            > div:nth-of-type(2) {
                span:nth-of-type(2) {
                    margin-top: 0.25rem;
                    color: var(--color-light-gray);
                }
            }
        }

        & + div {
            margin-top: 1.5rem;
        }

        @media screen and (max-width: 1024px) {
            flex-direction: column;
            gap: ${pxToRem(20)};

            > div {
                min-width: initial;
            }
        }
    }
`;

export const IconContainer = styled.div`
    width: ${pxToRem(50)};
    height: ${pxToRem(50)};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-text);
    border-radius: ${pxToRem(12)};
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1.25rem;

    > span {
        font-size: ${pxToRem(14)};

        &:first-of-type {
            font-weight: 600;
        }
    }
`;

export const MapContainer = styled.div`
    position: relative;
    flex: 1;
    min-height: 50vh;
`;

export const MapWrapper = styled.div`
    padding: 3rem;
    color: var(--color-white);

    > h3 {
        margin-bottom: ${pxToRem(30)};
    }

    > p {
        margin-bottom: 1.25rem;
    }
`;

export const Buttons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    > button {
        width: 100%;
        max-width: ${pxToRem(120)};
    }

    @media screen and (max-width: 1024px) {
        justify-content: center;
    }
`;

export const Heading = styled.span`
    display: block;
    margin-bottom: ${pxToRem(30)};
    font-size: ${pxToRem(20)};
    font-weight: 600;
    color: white;
`;

export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 2rem 0;

    > div {
        /* margin: auto; */
    }
`;

export const Category = styled.div`
    > div {
        font-size: 1rem;
        margin: 2rem 0 1.5rem;
    }
`;

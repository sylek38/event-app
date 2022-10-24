import { pxToRem } from "./../../../utils/pxToRem";
import styled, { css } from "styled-components";

const spanStyle = css`
    > span {
        display: block;
        margin-bottom: ${pxToRem(30)};
        font-size: ${pxToRem(20)};
        font-weight: 600;
        color: white;
    }
`;

export const Post = styled.div<{ width: number }>`
    width: 90%;
    max-width: ${pxToRem(750)};
    margin: auto;
    background-color: var(--secondary-background);
    border-radius: ${pxToRem(24)};
    box-shadow: 0 0 1.5em var(--box-shadow--black);
`;

export const BackgroundContainer = styled.div`
    position: relative;
    border-bottom: ${pxToRem(3)} solid var(--color-white);
    height: ${pxToRem(250)};

    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: ${pxToRem(24)} ${pxToRem(24)} 0 0;
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

    > img {
        width: ${pxToRem(80)};
        height: ${pxToRem(80)};
        object-fit: cover;
        margin-bottom: 0.25rem;
        border-radius: 50%;
        border: 3px solid var(--color-white);
    }

    > span {
        color: var(--color-white);
    }
`;

export const Content = styled.div`
    position: relative;
    padding: ${pxToRem(66)} ${pxToRem(48)} ${pxToRem(30)} ${pxToRem(48)};
`;

export const Title = styled.span`
    display: block;
    height: 3rem;
    margin-top: ${pxToRem(10)};
    margin-bottom: ${pxToRem(20)};
    font-size: 1rem;
    font-weight: bold;
    color: var(--color-white);

    line-height: 1.5rem;
    max-height: 3rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
`;

export const DescriptionSection = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Section = styled.div`
    margin-top: ${pxToRem(60)};

    ${spanStyle};

    > p {
        color: var(--color-white);

        & + p {
            margin-top: 1rem;
        }
    }
`;

export const DetailsItem = styled.div`
    display: flex;
    color: var(--color-white);
`;

export const DetailsSection = styled.div`
    margin-top: ${pxToRem(60)};

    ${spanStyle};

    > div {
        display: flex;

        > div {
            flex: 1;
            min-width: 280px;
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

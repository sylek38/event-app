import { pxToRem } from "./../../../utils/pxToRem";
import styled from "styled-components";

export const Post = styled.a<{ width: number }>`
    background-color: var(--secondary-background);
    border-radius: ${pxToRem(24)};
    box-shadow: 0 0 1.5em var(--box-shadow--black);
    max-width: ${({ width }) => `${width}px`};
    transition: 0.15s;

    &:hover {
        background-color: var(--secondary-background--hover);
    }
`;

export const BackgroundContainer = styled.div`
    position: relative;
    border-bottom: ${pxToRem(3)} solid var(--color-white);
    height: ${pxToRem(200)};

    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: ${pxToRem(24)} ${pxToRem(24)} 0 0;
    }
`;

export const Date = styled.div`
    position: absolute;
    top: ${pxToRem(20)};
    right: ${pxToRem(20)};
    width: ${pxToRem(50)};
    height: ${pxToRem(50)};
    background-color: var(--color-white);
`;

export const UserInfo = styled.div`
    position: absolute;
    top: ${pxToRem(-33)};
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;

    > img {
        width: ${pxToRem(60)};
        height: ${pxToRem(60)};
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
    padding: ${pxToRem(66)} ${pxToRem(20)} ${pxToRem(30)} ${pxToRem(20)};
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

export const Details = styled.div`
    align-self: flex-end;
    > * + * {
        margin-top: ${pxToRem(10)};
    }
`;

export const DetailsItem = styled.div`
    color: var(--secondary-text);

    > svg {
        margin-right: ${pxToRem(10)};
    }

    > span {
        font-size: ${pxToRem(12)};
    }
`;

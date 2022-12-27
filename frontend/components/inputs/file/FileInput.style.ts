import styled, { css } from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const ImageAvatar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 15rem;
    color: var(--color-white);
`;

export const ImageLabel = styled.label`
    position: relative;
    display: block;
    width: 100%;
    line-height: 15rem;
    background-image: var(--primary-gradient);
    font-size: var(--font-size-32);
    font-weight: bold;
    border-radius: 20px;
    cursor: pointer;

    text-align: center;

    :hover div {
        display: block;
    }
`;

export const ImageInput = styled.input`
    display: none;
`;

export const ImageHover = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: none;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.5);
`;

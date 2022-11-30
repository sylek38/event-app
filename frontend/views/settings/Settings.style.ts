import { pxToRem } from "../../utils/pxToRem";
import styled, { css } from "styled-components";

export const Form = styled.form`
    display: flex;
    width: 57.5rem;
    min-height: 30rem;
    background-color: var(--secondary-background);
    border-radius: ${pxToRem(20)};
    input {
        /* font-size: var(--font-size-12);
        height: 5px; */
        margin-bottom: ${pxToRem(15)};
    }
`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${pxToRem(230)};
    border-right: 1px solid var(--secondary-text);
    padding: 0 ${pxToRem(20)} 0 ${pxToRem(20)};
`;

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${pxToRem(30)};
    width: 100%;
    letter-spacing: 2px;
    button {
        align-self: flex-end;
    }
`;

export const ProfilePictureContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 7.5rem;
    padding: ${pxToRem(30)} 0 ${pxToRem(20)} 0;
`;

export const AvatarIMG = styled.img`
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 50%;
    margin-bottom: ${pxToRem(10)};
`;

export const AvatarLabel = styled.label`
    font-size: var(--font-size-12);
    color: var(--primary-text);
    font-weight: lighter;
    cursor: pointer;
    :hover {
    }
`;

export const ImageInput = styled.input`
    display: none;
`;

export const deleteAcc = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    margin: ${pxToRem(20)} 0 ${pxToRem(20)} 0;
    font-weight: lighter;
    font-size: var(--font-size-12);
    color: crimson;
`;

export const Header = styled.h2`
    font-weight: lighter;
    color: var(--primary-text);
`;

export const HeaderBelow = styled.span`
    font-weight: lighter;
    color: var(--primary-text);
    align-self: baseline;
`;

export const Biogram = styled.textarea`
    width: 100%;
    margin: ${pxToRem(15)} 0;
    font-weight: lighter;
    color: var(--primary-text);
    background-color: var(--primary-background);
    border: none;
    border-radius: ${pxToRem(15)};
    height: 100%;
    padding: ${pxToRem(15)};
    resize: none;

    :focus {
        border: none;
        outline: none;
    }
`;

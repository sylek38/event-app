import { pxToRem } from "./../../../utils/pxToRem";
import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    textarea {
        margin-bottom: ${pxToRem(36)};
    }

    form div {
        margin-bottom: ${pxToRem(20)};
    }
`;

export const ImageAvatar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 6.25rem;
`;

export const ImageLabel = styled.label`
    display: block;
    width: 6.25rem;
    height: 6.25rem;
    padding-left: 0 !important;
    margin-top: 0 !important;
    /* background-image: url("https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    font-size: var(--font-size-12);
    cursor: pointer;

    :hover div {
        display: block;
    }
`;

export const ImageInput = styled.input`
    display: none;
`;

export const ImageHover = styled.div`
    display: none;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 6.25rem;
    border-radius: 50%;
    text-align: center;
    line-height: 6.25rem;
`;

export const Form = styled.form`
    margin-bottom: 0px;
    padding-bottom: 0px;
`;

export const deleteBtn = styled.span`
    display: block;
    width: 100%;
    margin-top: 2.5rem;
    color: crimson;
    text-align: center;
    cursor: pointer;
`;

export const Success = styled.div`
    margin-top: 1rem;
    text-align: center;
    color: var(--primary-color);
`;

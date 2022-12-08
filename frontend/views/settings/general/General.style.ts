import { pxToRem } from "./../../../utils/pxToRem";
import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        margin: 0.75rem 0;
    }
    textarea {
        margin-bottom: ${pxToRem(36)};
    }
    label {
        padding-left: 1.25rem;
        margin-top: 0.75rem;
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

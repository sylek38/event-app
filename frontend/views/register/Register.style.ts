import { pxToRem } from "../../utils/pxToRem";
import styled, { css } from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: var(--primary-background);
`;

export const LeftSide = styled.div`
    flex-basis: 50vw;
    background-image: url("https://images.unsplash.com/photo-1496024840928-4c417adf211d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
    background-size: cover;
    background-position: 65%;
`;

export const RightSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 50vw;
`;

export const loginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 400px;
    min-height: 500px;
    background-color: var(--secondary-background);
    padding: 0 30px 0 30px;
    border-radius: 20px;

    -webkit-box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.5);

    &:before {
        content: "";
        position: relative;
        display: block;
        border-radius: 50px 50px 0 0;
        background-image: var(--primary-gradient);
        width: 90%;
        height: 10px;
        top: -10px;
    }
`;

export const loginHeader = styled.h1`
    padding-top: 20px;
    color: #fff;
    margin-bottom: 20px;
    font-size: 21px;
`;

export const loginLabel = styled.label`
    align-self: flex-start;
    color: #999;
    font-size: var(--font-size-12);
    margin-bottom: 10px;
`;

export const loginInput = styled.input`
    all: unset;
    width: 90%;
    padding: 10px 20px;
    border-radius: 50px;
    background-color: var(--primary-background);
    color: var(--color-white);
    font-size: var(--font-size-14);
    margin-bottom: 15px;
`;

export const LoginMiddle = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    margin: 20px;
    font-size: var(--font-size-12);
`;

export const LoginMiddleContent = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    align-content: center;
    justify-content: center;
`;

export const LoginMiddleLeft = styled.label`
    display: block;
    position: relative;
    padding-left: 45px;
    margin-bottom: 12px;
    padding-top: 12px; //zmiana wysokosci
    font-size: var(--font-size-12);
    color: var(--secondary-text);
    cursor: pointer;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    input:checked ~ span {
        background-color: var(--secondary-background);
    }

    input:checked ~ span:after {
        display: block;
    }

    span:after {
        left: 8px;
        top: 3px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;

export const LoginMiddleInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
`;

export const LoginMiddleSpan = styled.span`
    position: absolute;
    top: 7px;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: transparent;
    border-radius: 5px;
    border: 3px solid var(--secondary-text);
    ::after {
        content: "";
        position: absolute;
        display: none;
    }
`;

export const LoginMiddleRemember = styled.label`
    display: block;
    height: 50%;
    color: var(--secondary-text);
`;

export const LoginMiddleHref = styled.a`
    font-size: var(--font-size-12);
    color: var(--primary-color);
    font-weight: bold;

    :hover {
        color: var(--secondary-text);
    }
`;

export const LoginButton = styled.button`
    all: unset;
    width: 90%;
    padding: 10px 15px 10px 15px;
    margin-top: 15px;
    border-radius: 50px;
    background-image: var(--primary-gradient);
    color: var(--color-white);
    text-align: center;
    font-weight: bold;
    cursor: pointer;
`;

export const LoginGoogleButton = styled.button`
    position: absolute;
    all: unset;
    width: 90%;
    padding: 10px 15px 10px 15px;
    margin-top: 15px;
    border-radius: 50px;
    background-color: var(--color-white);
    color: black;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
`;

export const LoginGoogleIcon = styled.span`
    display: inline-block;
    position: relative;
    padding: 0;
    left: -40px;
    top: 3px;
    transform: scale(1.4);
`;

export const LoginFooter = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    width: 90%;
    margin: 30px 30px 22px 30px;
    font-size: var(--font-size-16);
`;

export const LoginFooterHref = styled.a`
    color: var(--color-white);
    font-weight: bold;
    padding: 0 10px 5px 10px;
    border-bottom: 3px solid transparent;
    cursor: pointer;
    transition: 0.2s;

    :hover {
        border-image: var(--primary-gradient);
        border-image-slice: 1;
    }
`;

export const LoginFooterSpan = styled.span`
    color: var(--secondary-text);
`;

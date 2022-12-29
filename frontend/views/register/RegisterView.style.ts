import { pxToRem } from "../../utils/pxToRem";
import styled from "styled-components";

export const Container = styled.div`
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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: ${pxToRem(550)};
    background-color: var(--secondary-background);
    padding: 0 ${pxToRem(30)};
    border-radius: 1.25rem;

    > div:nth-child(2),
    div:nth-child(3),
    div:nth-child(4) {
        margin-bottom: ${pxToRem(20)};
    }

    -webkit-box-shadow: 0px 0px ${pxToRem(20)} -${pxToRem(5)} rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px ${pxToRem(20)} -${pxToRem(5)} rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px ${pxToRem(20)} -${pxToRem(5)} rgba(0, 0, 0, 0.5);

    &:before {
        content: "";
        position: relative;
        display: block;
        border-radius: ${pxToRem(50)} ${pxToRem(50)} 0 0;
        background-image: var(--primary-gradient);
        width: 90%;
        height: ${pxToRem(10)};
        top: -${pxToRem(10)};
    }
`;

export const Header = styled.h1`
    padding-top: 1.25rem;
    color: #fff;
    margin-bottom: 1.25rem;
    font-size: var(--font-size-20);
`;

export const Label = styled.label`
    align-self: flex-start;
    color: #999;
    font-size: var(--font-size-12);
    margin-bottom: ${pxToRem(10)};
`;

export const Input = styled.input`
    all: unset;
    width: 90%;
    padding: ${pxToRem(10)} 1.25rem;
    border-radius: ${pxToRem(50)};
    background-color: var(--primary-background);
    color: var(--color-white);
    font-size: var(--font-size-14);
    margin-bottom: ${pxToRem(15)};
`;

export const Middle = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    margin: 1.25rem;
    font-size: var(--font-size-12);
`;

export const MiddleContent = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    align-content: center;
    justify-content: center;
`;

export const MiddleLeft = styled.label`
    display: block;
    position: relative;
    padding-left: ${pxToRem(45)};
    margin-bottom: ${pxToRem(12)};
    padding-top: ${pxToRem(12)}; //zmiana wysokosci
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
        left: 0.5rem;
        top: ${pxToRem(3)};
        width: ${pxToRem(5)};
        height: ${pxToRem(10)};
        border: solid white;
        border-width: 0 ${pxToRem(3)} ${pxToRem(3)} 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;

export const MiddleInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
`;

export const MiddleSpan = styled.span`
    position: absolute;
    top: ${pxToRem(7)};
    left: 0;
    height: ${pxToRem(25)};
    width: ${pxToRem(25)};
    background-color: transparent;
    border-radius: ${pxToRem(5)};
    border: ${pxToRem(3)} solid var(--secondary-text);
    ::after {
        content: "";
        position: absolute;
        display: none;
    }
`;

export const MiddleRemember = styled.label`
    display: block;
    height: 50%;
    color: var(--secondary-text);
`;

export const MiddleHref = styled.a`
    font-size: var(--font-size-12);
    color: var(--primary-color);
    font-weight: bold;

    :hover {
        color: var(--secondary-text);
    }
`;

export const Button = styled.button`
    all: unset;
    width: 90%;
    padding: ${pxToRem(10)} ${pxToRem(15)} ${pxToRem(10)} ${pxToRem(15)};
    margin-top: ${pxToRem(15)};
    border-radius: ${pxToRem(50)};
    background-image: var(--primary-gradient);
    color: var(--color-white);
    text-align: center;
    font-weight: bold;
    cursor: pointer;
`;

export const GoogleButton = styled.button`
    position: absolute;
    all: unset;
    width: 90%;
    padding: ${pxToRem(10)} ${pxToRem(15)} ${pxToRem(10)} ${pxToRem(15)};
    margin-top: ${pxToRem(15)};
    border-radius: ${pxToRem(50)};
    background-color: var(--color-white);
    color: black;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
`;

export const GoogleIcon = styled.span`
    display: inline-block;
    position: relative;
    padding: 0;
    left: -${pxToRem(40)};
    top: ${pxToRem(3)};
    transform: scale(1.4);
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    width: 90%;
    margin: ${pxToRem(30)} ${pxToRem(30)} ${pxToRem(22)} ${pxToRem(30)};
    font-size: var(--font-size-16);
`;

export const FooterHref = styled.a`
    color: var(--color-white);
    font-weight: bold;
    padding: 0 ${pxToRem(10)} ${pxToRem(5)} ${pxToRem(10)};
    border-bottom: ${pxToRem(3)} solid transparent;
    cursor: pointer;
    transition: 0.2s;

    :hover {
        border-image: var(--primary-gradient);
        border-image-slice: 1;
    }
`;

export const FooterSpan = styled.span`
    color: var(--secondary-text);
`;

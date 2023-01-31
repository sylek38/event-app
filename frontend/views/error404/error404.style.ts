import { pxToRem } from "../../utils/pxToRem";
import styled from "styled-components";
// import img from "./../../public/images/404.png";

export const Container = styled.div`
    /* display: flex; */
    /* width: 1080px;
    margin: ${pxToRem(20)} auto;
    color: var(--color-gray); */
    background-image: url("https://i.imgur.com/TsLi7N3.png");
    background-position: center bottom;
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
`;

export const Content = styled.div`
    width: 50%;
    /* height: 100vh; */
    text-align: center;
    padding-top: 18%;
    /* line-height: 50vh; */

    /* background-color: red; */
`;

export const Top = styled.div`
    font-size: 74px;
    font-weight: bold;
    color: var(--color-white);
`;

export const Bottom = styled.div`
    font-size: 42px;
    font-weight: lighter;
    color: var(--color-gray);
    margin-bottom: 20px;
`;

export const Button = styled.button`
    all: unset;
    width: 20%;
    padding: ${pxToRem(10)} ${pxToRem(15)} ${pxToRem(10)} ${pxToRem(15)};
    border-radius: ${pxToRem(50)};
    background-image: var(--primary-gradient);
    color: var(--color-white);
    text-align: center;
    font-weight: bold;
    cursor: pointer;
`;

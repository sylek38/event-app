import { pxToRem } from "../../utils/pxToRem";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 1080px;
    margin: ${pxToRem(20)} auto;
    color: var(--color-gray);
`;

export const Sidebar = styled.div`
    position: sticky;
    top: 1rem;
    left: 0;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 0 0 2rem 5rem;
    height: ${pxToRem(20)};

    div:nth-child(3) {
        background-color: var(--secondary-background--hover);
    }
`;

export const Option = styled.div`
    width: ${pxToRem(185)};
    padding: 0.5rem 2rem 0.5rem 0.5rem;
    color: var(--color-light-gray);
    font-size: var(--font-size-14);
    cursor: pointer;

    :hover {
        background-color: var(--secondary-background--hover);
    }
`;

export const Content = styled.div`
    flex-grow: 10;
    padding: ${pxToRem(15)} ${pxToRem(80)};
    background-color: var(--secondary-background);
    border-radius: ${pxToRem(20)};

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
        top: -${pxToRem(25)};
        left: ${pxToRem(40)};
    }
`;

export const Title = styled.h1`
    font-size: var(--font-size-16);
    text-align: center;
    text-decoration: underline;
    letter-spacing: 2px;
    margin-bottom: 2rem;
`;

export const Header = styled.h2`
    font-size: var(--font-size-14);
    font-style: italic;
    font-weight: lighter;
    text-decoration: underline;
    padding: 1rem 0;
`;

export const Paragraph = styled.p``;

export const Ol = styled.ol`
    font-size: var(--font-size-12);

    li::marker {
        font-weight: bold;
    }
`;
export const Li = styled.li`
    padding: 4px;
`;

export const Logo = styled.img`
    margin-bottom: 1rem;
`;

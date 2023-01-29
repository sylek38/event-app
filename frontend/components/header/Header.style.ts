import { pxToRem } from "./../../utils/pxToRem";
import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    background-color: var(--primary-background);
    padding: ${pxToRem(25)} 4rem ${pxToRem(25)} calc(4rem + 6rem);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${pxToRem(70)};
    flex-shrink: 1;

    > div {
        max-width: ${pxToRem(1080)};
        width: 100%;
        display: flex;
        justify-content: space-between;

        /* This is just temporary: */
        > svg {
            height: 50px;
            width: 50px;
            background-color: var(--secondary-background);
            border-radius: 50%;
            margin-left: 1rem;
        }
    }

    @media screen and (max-width: 619px) {
        padding: ${pxToRem(30)} 1rem;
    }
    margin: 0 0 ${pxToRem(50)} ${pxToRem(100)};
`;
